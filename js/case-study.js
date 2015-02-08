MSECPERDAY = 86400000;

window.visualizations = window.visualizations || {};

visualizations.interviewData = {

	colors : {
		sony : '#4673F0',
		gop : '#F05946',
		investigators : '#48D46B',
		commentators : '#F7903B',
		northKorea : '#8E40D6'
	},

	actorGroups : [
		{
			name : 'sony',
			events : [
				{
					date : 'November 24 2014',
					text : 'Sources within Sony report that they have been hacked and blackmailed by the Guardians of Peace'
				},
				{
					date : 'Dec 15 2014',
					text : 'Seth Rogen gives an interview to Howard Stern saying that media organisations are directly profiting from stolen information.'
				},
				{
					date : 'Dec 16 2014',
					text : 'New York premiere of The Interview – scheduled for 18 December – cancelled.',
					caused : [
						{
							date : 'Dec 19 2014',
							group : 'cultural commentary'
						}
					]
				},
				{
					date : 'Dec 17 2014',
					text : 'Sony announces that it is to cancel theatrical release of The Interview.',
					caused : [
						{
							date : 'Dec 19 2014',
							group : 'cultural commentary'
						}
					]
				},
				{
					date : 'Dec 18 2014',
					text : 'Sony cancels DVD and VOD release of the film as well as theatrical.',
					caused : [
						{
							date : 'Dec 19 2014',
							group : 'cultural commentary'
						}
					]
				},
				{
					date : 'Dec 19 2014',
					text : 'Sony CEO denies that they made a mistake.'
				},
				{
					date : 'Dec 22 2014',
					text : 'Sony threatens Twitter with legal action for publishing email leaks.'
				},
				{
					date : 'Dec 23 2014',
					text : 'Sony approves limited US release of The Interview on Christmas Day.'
				},
				{
					date : 'Dec 25 2014',
					text : 'The Interview releases theatrically in the US.'
				},
				{
					date : 'Dec 29 2014',
					text : 'Online sales reach $18m.'
				},
			]
		},

		{
			name : 'guardians of peace',
			events : [
				{
					date : 'Nov 24 2014',
					text : 'GOP hacks Sony computers, leaving threatening message with warning about leaked documents.',
					caused : [
						{
							group : 'sony',
							date : 'Nov 24, 2014'
						},
						{
							group : 'cultural commentary',
							date : 'Dec 1, 2014'
						}
					]
				},
				{
					date : 'Dec 1 2014',
					text : 'Key Sony Christmas and awards titles such as Fury, Mr Turner and Annie released online by hackers.'
				},
				{
					date : 'Dec 3 2014',
					text : 'The Guardians of Peace group appear to have used the infrastructure of Sony’s PlayStation Network to spread a huge amount of stolen Sony Pictures’ data.',
					caused : [
						{
							date : 'Dec 6 2014',
							group : 'cultural commentary'
						},
						{
							date : 'Dec 10 2014',
							group : 'cultural commentary'
						},
						{
							date : 'Dec 12 2014',
							group : 'cultural commentary'
						}
					]
				},
				{
					date : 'Dec 9 2014',
					text : 'Guardians of Peace issue message demanding Sony pull The Interview: "Stop immediately showing the movie of terrorism which can break the regional peace and cause the War."'
				},
				{
					date : 'Dec 12 2014',
					text : 'Guardians of Peace threaten to leak other studios’ data.'
				},
				{
					date : 'Dec 16 2014',
					text : 'Guardians of Peace warn audiences cinemas screening The Interview may be subject to 9/11 style attack.',
					caused : [
						{
							date : 'Dec 16 2014',
							group : 'sony'
						},
						{
							date : 'Dec 17 2014',
							group : 'sony'
						},
						{
							date : 'Dec 18 2014',
							group : 'sony'
						}
					]
				},
			]
		},

		{
			name : 'u.S. investigators',
			events : [
				{
					date : 'Dec 2 2014',
					text : 'FBI begins investigations into North Korean involvement in the hack.',
					caused : {
						date : 'Dec 4 2014',
						group : 'north korea'
					}
				},
				{
					date : 'Dec 10 2014',
					text : 'FBI expresses scepticism about North Korea link.'
				},
				{
					date : 'Dec 11 2014',
					text : 'FBI says that leak would have challenged government data.'
				},
				{
					date : 'Dec 16 2014',
					text : 'Department of Homeland Security dismisses “active” threat.'
				},
				{
					date : 'Dec 18 2014',
					text : 'FBI announces that it is set to connect North Korea to the Sony hack after all.'
				},
				{
					date : 'Dec 19 2014',
					text : 'FBI concludes North Korea responsible for hack.',
					caused : {
						date : 'Dec 19, 2014',
						group : 'north korea'
					}
				},

				{
					date : 'Dec 20 2014',
					text : 'US says may put North Korea back on state terror list after Sony ‘cybervandalism’ by Obama says hack was not an act of war.',
					caused : {
						date : 'Dec 21, 2014',
						group : 'north korea'
					}
				},
			]
		},

		{
			name : 'cultural commentary',
			events : [
				{
					date : 'Dec 1 2014',
					text : 'Suspicions rise that North Korea may be behind the attack, though some analysts remain sceptical.',
					caused : {
						date : 'Dec 2 2014',
						group : 'u.S. investigators'
					}
				},
				{
					date : 'Dec 6 2014',
					text : 'Fusion reveals striking pay discrepancies between Sony employees of different genders and ethnicities.',
					caused : [
						{
							date : '15 Dec 2014',
							group : 'sony'
						}
					]
				},

				{
					date : 'Dec 10 2014',
					text : 'Defamer uncovers embarrassing emails between Sony co-chair Amy Pascal and producer Scott Rudin, charting the breakdown of their professional relationship, and discussing Angelina Jolie, David Fincher and Adam Driver.',
					caused : [
						{
							date : '15 Dec 2014',
							group : 'sony'
						}
					]
				},
				{
					date : 'Dec 12 2014',
					text : 'Embargo lifts on reviews of The Interview. Film wins warm if not ecstatic notices, with critics noting that Kim Jong-un is portrayed in a surprisingly positive light.'
				},
				{
					date : 'Dec 13 2014',
					text : 'Leaked email reveals surprising discrepancies in pay packets for male and female stars, including Jennifer Lawrence.',
					caused : [
						{
							date : '15 Dec 2014',
							group : 'sony'
						}
					]
				},
				{
					date : 'Dec 17 2014',
					text : 'Rival studios express disquiet over knock-on effect for Christmas box office of threat by Guardians of Peace.'
				},
				{
					date : 'Dec 18 2014',
					text : 'Obama calls for calm amid fresh threats of terrorism.'
				},
				{
					date : 'Dec 19 2014',
					text : 'Obama says Sony made a mistake in pulling movie.',
					caused : {
						date : 'Dec 23 2014',
						group : 'sony'
					}
				},
				{
					date : 'Dec 21 2014',
					text : 'Mike Myers’s Dr Evil comments on Saturday Night Live.'
				},
				{
					date : 'Dec 22 2014',
					text : 'Rumours that US is behind mysterious shutdown of North Korean internet access.'
				},
				{
					date : 'Dec 22 2014',
					text : 'White House approves of the decision to screen both in cinemas and online.'
				},
				{
					date : 'Dec 30 2014',
					text : 'Researchers claim former Sony employees could be responsible for the hack.'
				},
				{
					date : 'Dec 31 2014',
					text : 'South Korean activist vows to float balloons carrying copies of The Interview into North Korea.'
				},
			]
		},

		{
			name : 'north korea',
			events : [
				{
					date : 'Dec 4 2014',
					text : 'North Korea denies involvement in the hack.'
				},
				{
					date : 'Dec 8 2014',
					text : 'North Korea says Sony cyber-attack may be “righteous” work of its supporters but denies any direct responsibility.'
				},
				{
					date : 'Dec 19 2014',
					text : 'North Korea proposes joint inquiry into hack with US'
				},
				{
					date : 'Dec 21 2014',
					text : 'North Korea says it has evidence US government deeply involved in making of The Interview and threatens entire country in retaliation for any "proportional response"'
				},
				{
					date : 'Dec 22 2014',
					text : 'Widespread internet outages reported in North Korea',
					caused : {
						date : 'dec 22 2014',
						group : 'cultural commentary'
					}
				},
				{
					date : 'Dec 23 2014',
					text : 'North Korean internet resumes'
				},
			]
		}
	]
}

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
		dateFormat : options.dateFormat || d3.time.format('%b %d'),
		margin : null,
		padding : options.padding || 30,
		colors : options.colors || {
			interfaceColor : d3.rgb('#C9C9C9'),
			dataColors : [d3.rgb('#4673F0'), d3.rgb('#F05946'), d3.rgb('#48D46B'), d3.rgb('#F7903B'), d3.rgb('#8E40D6')]
		},
		groupIndex : [],
		eventsByDate : [],

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
				this.calculateDateLimits(1);
				this.setDateScale();
				this.calculateHeight();
				this.generateGroupIndex();
				this.setEventsByDate();
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

			this.minDate.setDate(this.minDate.getDate() - padding);
			this.maxDate.setDate(this.maxDate.getDate() + padding);
		},

		calculateHeight : function() {
			this.h = (this.data.length * this.padding) + (this.padding * 2);
		},

		setDateScale : function() {
			this.dateScale = d3.time.scale()
				.domain([this.minDate, this.maxDate])
				.range([0, this.w - this.padding]);
		},

		setEventsByDate : function() {
			var totalDays = (this.maxDate.getTime() - this.minDate.getTime()) / MSECPERDAY;

			for (var i = 0; i < totalDays; ++i) {
				this.eventsByDate[i] = [];
			}

			for (var i = 0; i < this.data.length; ++i) {
				var d = this.data[i];
				for (var x = 0; x < d.events.length; ++x) {
					var e = d.events[x];
					e.group = i;
					var eDate = (new Date(e.date).getTime() - this.minDate.getTime()) / MSECPERDAY;
					this.eventsByDate[eDate].push(e);
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
				var reader = d3.select(_this.reader),
						day = new Date(_this.dateScale.invert(m[0])).getTime(),
						dayIndex = Math.floor((day - _this.minDate.getTime()) / MSECPERDAY)
				
				reader.selectAll('*').remove();
				reader.append('h2').text( _this.dateFormat(_this.dateScale.invert(m[0])) );
				reader.append('ul')
					.style({ 'list-style' : 'none', 'padding' : '0' })
					.selectAll('.list-item')
					.data(_this.eventsByDate[dayIndex])
					.enter()
						.append('li')
						.classed('list-item', true)
						.text(function(d) { return d.text })
						.style({
								'padding-left' : '1.5em',
								'border-left' : function(d) { return '4px solid' + _this.colors.dataColors[d.group] },
								'margin-bottom' : '1em'
						});

				if (_this.eventsByDate[dayIndex].length == 0) {
					reader.append('p')
						.text('No events to show for this date')
						.style({ 'opacity' : '0.5', 'font-style' : 'italic' });
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
					.attr('stroke', function(d, i) { return _this.colors.dataColors[i].brighter() })
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

			nodeGroup.selectAll('.node')
				.data(function(d) { return d.events })
				.enter()
					.append('circle')
					.classed('node', true)
					.attr('cx', function(d) { return _this.dateScale(new Date(d.date)) })
					.attr('cy', function(d) { return this.parentNode.dataset.group * _this.padding })
					.attr('r', 5)
					.attr('fill', function(d) { return _this.colors.dataColors[this.parentNode.dataset.group] });
		},

		addCurves : function() {
			var _this = this;

			this.curves = this.stage.selectAll('.curve-group')
				.data(this.data)
			
			var curveGroup = this.curves
				.enter()
					.append('g')
					.classed('curve-group', true)
					.attr('data-color', function(d, i) { return  _this.colors.dataColors[i]; })
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

						var srcX = _this.dateScale(this.parentNode.dataset.date);
						var targetX = _this.dateScale(new Date(d.date).getTime());

						var srcY = this.parentNode.parentNode.dataset.group * _this.padding;
						var targetY = _this.groupIndex.indexOf(d.group) * _this.padding;

						if (targetY - srcY < 0) {
							srcY -= 5;
							targetY += 5;
						} else {
							srcY += 5;
							targetY -= 5;
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
						'text-transform' : 'uppercase'
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

					d.text(_this.dateFormat(_this.dateScale.invert(x)));
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
				var m = d3.mouse(this)
				for (var i = 0; i < _this.mouseMoveActions.length; ++i) {
					_this.mouseMoveActions[i](m);
				}
			});
		}

	}

	return ct.init();

}

window.addEventListener('init', function(e) {

var opts = {
	container : document.querySelector('#case-study-vis-01'),
	w : document.querySelector('#case-study-vis-01').getBoundingClientRect().width * 1.5,
	reader : document.querySelector('#case-study-vis-reader-01'),
}

var ct = new CausalityTimeline(visualizations.interviewData.actorGroups, opts);

ct.stage
	.style({
		'margin-left' : -1 * ((ct.w - ct.container.getBoundingClientRect().width) / 2)
	})

});