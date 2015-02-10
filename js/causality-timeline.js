var CausalityTimeline = function(data, options) {

	var initializationErrors = [];

	var ct = {
		error : [],
		w : options.w || 800,
		h : options.h || null,
		container : options.container || document.querySelector('#causality-timeline-container') || initializationErrors.push('Please pass a selection for options.container'),
		reader : options.reader || document.querySelector('#causality-timeline-reader') || initializationErrors.push('Please pass a selection for options.reader'),
		stage : d3.select(options.container).append('svg'),
		data : data || initializationErrors.push('You must pass data into the constructor'),
		dateScale : null,
		minDate : null,
		maxDate : null,
		datePadding : options.datePadding || 2,
		dateFormat : options.dateFormat || d3.time.format('%b %d'),
		margin : null,
		increment : options.increment || 86400000,
		dataSegment : 0,
		dataTimestamp : '',
		padding : options.padding || 30,
		colors : options.colors || {
			interfaceColor : d3.rgb('#C9C9C9'),
			dataColors : d3.scale.linear()
										.domain([0, data.length])
										.range([d3.rgb(74,39,246), d3.rgb(0,232,116)])
		},
		groupIndex : [],
		eventsByIncrement : [],

		// Graph components
		curves : null,
		nodes : null,
		lines : null,

		// Action Clusters
		mouseMoveActions : [],

		init : function() {

			if (initializationErrors.length > 0) {
				// Register and return errors
				this.error = initializationErrors;
				return this.error;
				console.log('Errors:', this.error);
			} else {
				// Compute properties
				this.margin = this.container.getBoundingClientRect.width - this.w/2;
				this.calculateDateLimits(this.datePadding);
				this.setDateScale();
				this.calculateHeight();
				this.generateGroupIndex();
				this.setEventsByIncrement();
				this.drawGraph();
				this.setUpReader();
				this.registerMouseMoveListener();
				return this;
			}

		},

		// +++++++++++++++++++++++++++++++ Initializing methods +++++++++++++++++++++++++++++++

		calculateDateLimits : function(padding) {
			var minDate = Infinity;
			var maxDate = null;

			for (var i = 0; i < this.data.length; ++i) {
				var g = this.data[i];
				for (var x = 0; x < g.events.length; ++x) {
					var e = g.events[x];
					var d = new Date(e.date);

					if (d.getTime() < minDate)
						minDate = d.getTime();

					if (d.getTime() > maxDate)
						maxDate = d.getTime();
				}
			}

			this.minDate = new Date(minDate);
			this.maxDate = new Date(maxDate);

			this.minDate.setTime(this.minDate.getTime() - (padding * this.increment));
			this.maxDate.setTime(this.maxDate.getTime() + (padding * this.increment));
		},

		calculateHeight : function() {
			this.h = (this.data.length * this.padding) + this.padding;
		},

		segmentForDate : function(d) {
			var delta = d.getTime() - this.minDate.getTime();
			var i = Math.floor(delta/this.increment);
			return i;
		},

		setDataSegment : function(x) {
			var d = this.dateScale.invert(x);
			this.dataSegment = this.segmentForDate(d);
			this.setDataTimestamp();
		},

		setDataTimestamp : function() {
			var totalD = (this.dataSegment * this.increment) + this.minDate.getTime();
			var d = new Date(totalD);
			this.dataTimestamp = this.dateFormat(d);
		},

		setDateScale : function() {
			this.dateScale = d3.time.scale()
				.domain([this.minDate, this.maxDate])
				.range([0, this.w - this.padding]);
		},

		setEventsByIncrement : function() {
			var totalIncrements = (this.maxDate.getTime() - this.minDate.getTime()) / this.increment;

			for (var i = 0; i < totalIncrements; ++i) {
				this.eventsByIncrement[i] = [];
			}

			for (var i = 0; i < this.data.length; ++i) {
				var d = this.data[i];
				for (var x = 0; x < d.events.length; ++x) {
					var e = d.events[x];
					e.group = i;
					var segment = this.segmentForDate(new Date(e.date));
					this.eventsByIncrement[segment].push(e);
				}
			}
		},

		generateGroupIndex : function() {
			for (var i = 0; i < this.data.length; ++i) {
				this.groupIndex.push(this.data[i].name);
			}
		},

		// +++++++++++++++++++++++++++++++ Reader Methods +++++++++++++++++++++++++++++++

		setUpReader : function() {
			var _this = this;
			var populateReader = function(m) {
				var reader = d3.select(_this.reader);

				if (_this.eventsByIncrement[_this.dataSegment] && _this.eventsByIncrement[_this.dataSegment].length > 0) {
				
					reader.selectAll('*').remove();
					reader.append('h3').text( _this.dataTimestamp );
					reader.append('ul')
						.style({ 'list-style' : 'none', 'padding' : '0' })
						.selectAll('.list-item')
						.data(_this.eventsByIncrement[_this.dataSegment])
						.enter()
							.append('li')
							.classed('list-item', true)
							.text(function(d) { return d.text })
							.style({
									'padding-left' : '1.5em',
									'border-left' : function(d) { return '4px solid' + _this.colors.dataColors(d.group) },
									'margin-bottom' : '1em'
							});

					if (_this.eventsByIncrement[_this.dataSegment].length == 0) {
						reader.append('p')
							.text('No events to show for this date')
							.style({ 'opacity' : '0.5', 'font-style' : 'italic' });
					}

				}

			}

			this.mouseMoveActions.push(populateReader);
		},

		// +++++++++++++++++++++++++++++++ Drawing Methods +++++++++++++++++++++++++++++++

		drawGraph : function() {
			this.setUpStage();
			this.addGuide();
			this.addLines();
			this.addCurves();
			this.addNodes();
			this.addLabels();
		},

		setUpStage : function() {

			this.stage
				.attr('width', this.w)
				.attr('height', this.h)
				.style({
					'overflow' : 'visible',
					'cursor' : 'crosshair',
				});
		},

		addLines : function() {
			var _this = this;

			var line = this.stage.selectAll('.line')
				.data(this.data)
				.enter()
					.append('line')
					.classed('.line', true)
					.attr('x1', function(d, i) { return _this.dateScale(new Date(d.events[0].date)) })
					.attr('y1', function(d, i) { return i * _this.padding })
					.attr('x2', function(d, i) { return _this.dateScale(new Date(d.events[d.events.length - 1].date)) })
					.attr('y2', function(d, i) { return i * _this.padding })
					.attr('stroke-width', 2)
					.attr('stroke', function(d, i) { return _this.colors.dataColors(i) })
					.attr('opacity', .8);

		},

		addNodes : function() {
			var _this = this;
			var nodeGroup = this.stage.selectAll('.node-group')
				.data(this.data)
				.enter()
					.append('g')
					.classed('node-group', true)
					.attr('data-group', function(d, i) { return i });

			var node = nodeGroup.selectAll('.node')
				.data(function(d) { return d.events })
				.enter()
					.append('circle')
					.classed('node', true)
					.attr('cx', function(d) { return _this.dateScale(new Date(d.date)) + 3 })
					.attr('cy', function(d) { return this.parentNode.dataset.group * _this.padding })
					.attr('r', 3)
					.attr('fill', function(d) { return _this.colors.dataColors(this.parentNode.dataset.group) })
					.attr('data-transitioning-up', 0)
					.attr('data-transitioning-down', 0);

			var mouseMove = function(m) {
				var x = m[0];

				var blockingNodeTransition = function(o) {
					var ox = o.getAttribute('cx');

					if (Math.abs(ox - x) < 4 && o.dataset.transitioningUp == 0) {
						d3.select(o)
							.attr('data-transitioning-up', 1)
							.transition()
							.ease('elastic')
							.duration(350)
							.attr('r', 5)
							.each('end', function() {
								this.setAttribute('data-transitioning-up', 0);
							})
							.each('interrupt', function() {
								this.setAttribute('data-transitioning-up', 0);
							})
					}

					if (Math.abs(ox - x) > 4 && o.dataset.transitioningDown == 0){
						d3.select(o)
							.attr('data-transitioning-down', 1)
							.transition()
							.ease('elastic')
							.duration(350)
							.attr('r', 3)
							.each('end', function() {
								this.setAttribute('data-transitioning-down', 0)
							})
							.each('interrupt', function() {
								this.setAttribute('data-transitioning-down', 0);
							})
					}
				}

				node
					.each(function() {
						blockingNodeTransition(this);
					});
			}

			this.mouseMoveActions.push(mouseMove);

		},

		addCurves : function() {
			var _this = this;

			this.curves = this.stage.selectAll('.curve-group')
				.data(this.data)
			
			var curveGroup = this.curves
				.enter()
					.append('g')
					.classed('curve-group', true)
					.attr('data-color', function(d, i) { return  _this.colors.dataColors(i); })
					.attr('data-group', function(d, i) { return i });

			var cDay = curveGroup.selectAll('.curve-day')
				.data(function(d) { return d.events })
				.enter()
					.append('g')
					.classed('curve-day', true)
					.attr('data-date', function(d) { return new Date(d.date).getTime() });

			var curve = cDay.selectAll('.curve')
				.data(function(d) {

					if (typeof d.caused === 'object' && d.caused.constructor === Array) 
						return d.caused;
					
					if (typeof d.caused === 'object')
						return [d.caused];

					return []; })
				.enter()
					.append('path')
					.classed('curve', true)
					.attr('d', function(d, i) {

						var srcX = _this.dateScale(this.parentNode.dataset.date) + 3;
						var targetX = _this.dateScale(new Date(d.date).getTime()) + 3;

						var srcY = this.parentNode.parentNode.dataset.group * _this.padding;
						var targetY = _this.groupIndex.indexOf(d.group) * _this.padding;

						if (targetY - srcY < 0) {
							srcY -= 3;
							targetY += 3;
						} else {
							srcY += 3;
							targetY -= 3;
						}

						var d = d3.svg.diagonal()
							.source({ x : srcX, y : srcY })
							.target({ x : targetX , y : targetY });

						return d([1]);

					})
					.attr('stroke', function() { return this.parentNode.parentNode.dataset.color })
					.attr('stroke-width', 1)
					.attr('fill', 'none')
					.attr('opacity', .5);

		},

		addLabels : function() {
			var _this = this;

			var label = this.stage.append('g')
				.classed('label-group', true)
				.selectAll('.label')
				.data(this.groupIndex)
				.enter()
					.append('text')
					.classed('label', true)
					.text(function(d) { return d })
					.style({
						'font-family' : '"aktiv-grotesk", sans-serif',
						'font-weight' : '300',
						'fill' : this.colors.interfaceColor,
						'font-size' : '12px',
						'text-transform' : 'uppercase',
						'pointer-events' : 'none'
					})
					.attr('transform', function(d, i) { return 'translate(-10,' + ((i * _this.padding) + 5) + ')' })
					.attr('text-anchor', 'end');

		},

		addGuide : function() {
			var guide = this.stage.append('g')
				.classed('guide', true)
				.attr('opacity', 1)

			guide.append('line')
				.classed('guide-line', true)
				.attr('x1', 0)
				.attr('y1', this.padding * -1)
				.attr('x2', 0)
				.attr('y2', this.h - this.padding)
				.attr('stroke-width', 1)
				.attr('stroke', this.colors.interfaceColor);

			guide.append('text')
				.classed('guide-date', true)
				.attr('transform', 'translate(10,0)')
				.text(this.dateFormat(this.dateScale.invert(0)))
				.attr('y', this.h - this.padding)
				.style({
					'font-family' : '"aktiv-grotesk", sans-serif',
					'font-weight' : '300',
					'fill' : this.colors.interfaceColor,
					'font-size' : '12px'
				});

			guide.append('path')
				.attr('d', d3.svg.symbol().type('triangle-down').size(8))
				.attr('transform', 'translate(0,' + (this.padding * -1) + ')')
				.attr('fill' , this.colors.interfaceColor);

			guide.append('path')
				.attr('d', d3.svg.symbol().type('triangle-up').size(8))
				.attr('fill', this.colors.interfaceColor)
				.attr('transform','translate(0,'+ (this.h - this.padding) +')');

			var date = guide.select('.guide-date')

			var onMouseMove = function(g, d, _this) {

				return function(m)	{
					var x = m[0];

					d.text(_this.dataTimestamp);
					g.attr('transform', 'translate('+ x +',0)');

					var textWidth = d[0][0].getBoundingClientRect().width;

					if ( textWidth > (this.w - (this.padding/2)) - x) {
						d.attr('transform', 'translate(-10,0)')
							.attr('text-anchor', 'end')
					} else {
						d.attr('transform', 'translate(10,0)')
							.attr('text-anchor', 'start')
					}
				}
			}

			this.mouseMoveActions.push(onMouseMove(guide, date, this));
		},

		// +++++++++++++++++++++++++++++++ Interaction Methods +++++++++++++++++++++++++++++++

		registerMouseMoveListener : function() {
			var _this = this;
			this.stage.on('mousemove', function(e) {
				var m = d3.mouse(this);
				_this.setDataSegment(m[0]);
				for (var i = 0; i < _this.mouseMoveActions.length; ++i) {
					_this.mouseMoveActions[i](m);
				}
			});
		}

	}

	return ct.init();

}