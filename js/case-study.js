msecPerDay = 86400000;

window.visualizations = window.visualizations || {};
visualizations.interviewData = {
	minDate : new Date('November 24 2014'),
	maxDate : new Date('Jan 1 2015'),

	actorGroupsIndex : ['sony', 'guardians of peace', 'u.S. investigators', 'cultural commentary', 'north korea'],

	colors : {
		sony : '#4673F0',
		gop : '#F05946',
		investigators : '#48D46B',
		commentators : '#F7903B',
		northKorea : '#8E40D6'
	},

	actorGroups : {
		sony : {
			name : 'sony',
			events : [
				{
					date : new Date('November 24 2014'),
					text : 'Sources within Sony report that they have been hacked and blackmailed by the Guardians of Peace'
				},
				{
					date : new Date('Dec 15 2014'),
					text : 'Seth Rogen gives an interview to Howard Stern saying that media organisations are directly profiting from stolen information.'
				},
				{
					date : new Date('Dec 16 2014'),
					text : 'New York premiere of The Interview – scheduled for 18 December – cancelled.',
					caused : [
						{
							date : new Date('Dec 19 2014'),
							group : 'cultural commentary'
						}
					]
				},
				{
					date : new Date('Dec 17 2014'),
					text : 'Sony announces that it is to cancel theatrical release of The Interview.',
					caused : [
						{
							date : new Date('Dec 19 2014'),
							group : 'cultural commentary'
						}
					]
				},
				{
					date : new Date('Dec 18 2014'),
					text : 'Sony cancels DVD and VOD release of the film as well as theatrical.',
					caused : [
						{
							date : new Date('Dec 19 2014'),
							group : 'cultural commentary'
						}
					]
				},
				{
					date : new Date('Dec 19 2014'),
					text : 'Sony CEO denies that they made a mistake.'
				},
				{
					date : new Date('Dec 22 2014'),
					text : 'Sony threatens Twitter with legal action for publishing email leaks.'
				},
				{
					date : new Date('Dec 23 2014'),
					text : 'Sony approves limited US release of The Interview on Christmas Day.'
				},
				{
					date : new Date('Dec 25 2014'),
					text : 'The Interview releases theatrically in the US.'
				},
				{
					date : new Date('Dec 29 2014'),
					text : 'Online sales reach $18m.'
				},
			]
		},

		gop : {
			name : 'guardians of peace',
			events : [
				{
					date : new Date('Nov 24 2014'),
					text : 'GOP hacks Sony computers, leaving threatening message with warning about leaked documents.',
					caused : [
						{
							group : 'sony',
							date : new Date('Nov 24, 2014')
						},
						{
							group : 'cultural commentary',
							date : new Date('Dec 1, 2014')
						}
					]
				},
				{
					date : new Date('Dec 1 2014'),
					text : 'Key Sony Christmas and awards titles such as Fury, Mr Turner and Annie released online by hackers.'
				},
				{
					date : new Date('Dec 3 2014'),
					text : 'The Guardians of Peace group appear to have used the infrastructure of Sony’s PlayStation Network to spread a huge amount of stolen Sony Pictures’ data.',
					caused : [
						{
							date : new Date('Dec 6 2014'),
							group : 'cultural commentary'
						},
						{
							date : new Date('Dec 10 2014'),
							group : 'cultural commentary'
						},
						{
							date : new Date('Dec 12 2014'),
							group : 'cultural commentary'
						}
					]
				},
				{
					date : new Date('Dec 9 2014'),
					text : 'Guardians of Peace issue message demanding Sony pull The Interview: "Stop immediately showing the movie of terrorism which can break the regional peace and cause the War."'
				},
				{
					date : new Date('Dec 12 2014'),
					text : 'Guardians of Peace threaten to leak other studios’ data.'
				},
				{
					date : new Date('Dec 16 2014'),
					text : 'Guardians of Peace warn audiences cinemas screening The Interview may be subject to 9/11 style attack.',
					caused : [
						{
							date : new Date('Dec 16 2014'),
							group : 'sony'
						},
						{
							date : new Date('Dec 17 2014'),
							group : 'sony'
						},
						{
							date : new Date('Dec 18 2014'),
							group : 'sony'
						}
					]
				},
			]
		},

		investigators : {
			name : 'u.S. investigators',
			events : [
				{
					date : new Date('Dec 2 2014'),
					text : 'FBI begins investigations into North Korean involvement in the hack.',
					caused : {
						date : new Date('Dec 4 2014'),
						group : 'north korea'
					}
				},
				{
					date : new Date('Dec 10 2014'),
					text : 'FBI expresses scepticism about North Korea link.'
				},
				{
					date : new Date('Dec 11 2014'),
					text : 'FBI says that leak would have challenged government data.'
				},
				{
					date : new Date('Dec 16 2014'),
					text : 'Department of Homeland Security dismisses “active” threat.'
				},
				{
					date : new Date('Dec 18 2014'),
					text : 'FBI announces that it is set to connect North Korea to the Sony hack after all.'
				},
				{
					date : new Date('Dec 19 2014'),
					text : 'FBI concludes North Korea responsible for hack.',
					caused : {
						date : new Date('Dec 19, 2014'),
						group : 'north korea'
					}
				},

				{
					date : new Date('Dec 20 2014'),
					text : 'US says may put North Korea back on state terror list after Sony ‘cybervandalism’ by Obama says hack was not an act of war.',
					caused : {
						date : new Date('Dec 21, 2014'),
						group : 'north korea'
					}
				},
			]
		},

		commentators : {
			name : 'cultural commentary',
			events : [
				{
					date : new Date('Dec 1 2014'),
					text : 'Suspicions rise that North Korea may be behind the attack, though some analysts remain sceptical.',
					caused : {
						date : new Date('Dec 2 2014'),
						group : 'u.S. investigators'
					}
				},
				{
					date : new Date('Dec 6 2014'),
					text : 'Fusion reveals striking pay discrepancies between Sony employees of different genders and ethnicities.',
					caused : [
						{
							date : new Date('15 Dec 2014'),
							group : 'sony'
						}
					]
				},

				{
					date : new Date('Dec 10 2014'),
					text : 'Defamer uncovers embarrassing emails between Sony co-chair Amy Pascal and producer Scott Rudin, charting the breakdown of their professional relationship, and discussing Angelina Jolie, David Fincher and Adam Driver.',
					caused : [
						{
							date : new Date('15 Dec 2014'),
							group : 'sony'
						}
					]
				},
				{
					date : new Date('Dec 12 2014'),
					text : 'Embargo lifts on reviews of The Interview. Film wins warm if not ecstatic notices, with critics noting that Kim Jong-un is portrayed in a surprisingly positive light.'
				},
				{
					date : new Date('Dec 13 2014'),
					text : 'Leaked email reveals surprising discrepancies in pay packets for male and female stars, including Jennifer Lawrence.',
					caused : [
						{
							date : new Date('15 Dec 2014'),
							group : 'sony'
						}
					]
				},
				{
					date : new Date('Dec 17 2014'),
					text : 'Rival studios express disquiet over knock-on effect for Christmas box office of threat by Guardians of Peace.'
				},
				{
					date : new Date('Dec 18 2014'),
					text : 'Obama calls for calm amid fresh threats of terrorism.'
				},
				{
					date : new Date('Dec 19 2014'),
					text : 'Obama says Sony made a mistake in pulling movie.',
					caused : {
						date : new Date('Dec 23 2014'),
						group : 'sony'
					}
				},
				{
					date : new Date('Dec 21 2014'),
					text : 'Mike Myers’s Dr Evil comments on Saturday Night Live.'
				},
				{
					date : new Date('Dec 22 2014'),
					text : 'Rumours that US is behind mysterious shutdown of North Korean internet access.'
				},
				{
					date : new Date('Dec 22 2014'),
					text : 'White House approves of the decision to screen both in cinemas and online.'
				},
				{
					date : new Date('Dec 30 2014'),
					text : 'Researchers claim former Sony employees could be responsible for the hack.'
				},
				{
					date : new Date('Dec 31 2014'),
					text : 'South Korean activist vows to float balloons carrying copies of The Interview into North Korea.'
				},
			]
		},

		northKorea : {
			name : 'north korea',
			events : [
				{
					date : new Date('Dec 4 2014'),
					text : 'North Korea denies involvement in the hack.'
				},
				{
					date : new Date('Dec 8 2014'),
					text : 'North Korea says Sony cyber-attack may be “righteous” work of its supporters but denies any direct responsibility.'
				},
				{
					date : new Date('Dec 19 2014'),
					text : 'North Korea proposes joint inquiry into hack with US'
				},
				{
					date : new Date('Dec 21 2014'),
					text : 'North Korea says it has evidence US government deeply involved in making of The Interview and threatens entire country in retaliation for any "proportional response"'
				},
				{
					date : new Date('Dec 22 2014'),
					text : 'Widespread internet outages reported in North Korea',
					caused : {
						date : new Date('dec 22 2014'),
						group : 'cultural commentary'
					}
				},
				{
					date : new Date('Dec 23 2014'),
					text : 'North Korean internet resumes'
				},
			]
		}
	}
}

visualizations.interviewData.eventsByDate = (function() { 

	var data = visualizations.interviewData.actorGroups;

	var events = [];
	var numDays = (visualizations.interviewData.maxDate - visualizations.interviewData.minDate) / msecPerDay;
	
	for (var i = 0; i < numDays; ++i) {
		var date = new Date(visualizations.interviewData.minDate.getTime() + (i * msecPerDay));
		var e = {
			sony : [],
			gop : [],
			investigators : [],
			commentators : [],
			northKorea : [],
			date : date
		};

		for (var x = 0; x < data.sony.events.length; ++x) {
			var eprime = data.sony.events[x];
			if (eprime.date.getTime() == date.getTime()) {
				e.sony.push(eprime);
			}
		}

		for (var x = 0; x < data.gop.events.length; ++x) {
			var eprime = data.gop.events[x];
			if (eprime.date.getTime() == date.getTime()) {
				e.gop.push(eprime);
			}
		}

		for (var x = 0; x < data.investigators.events.length; ++x) {
			var eprime = data.investigators.events[x];
			if (eprime.date.getTime() == date.getTime()) {
				e.investigators.push(eprime);
			}
		}

		for (var x = 0; x < data.commentators.events.length; ++x) {
			var eprime = data.commentators.events[x];
			if (eprime.date.getTime() == date.getTime()) {
				e.commentators.push(eprime);
			}
		}

		for (var x = 0; x < data.northKorea.events.length; ++x) {
			var eprime = data.northKorea.events[x];
			if (eprime.date.getTime() == date.getTime()) {
				e.northKorea.push(eprime);
			}
		}

		events[i] = e;

	}
	return events;

})();

visualizations.interviewBehaviors = {

	count : 0,

	addEventsToSelection : function(selection, events, scale, color) {

		if (!color)
			color = '#4673F0';

		color = d3.rgb(color);

		selection.attr('transform', 'translate(0,'+ (this.count * 30) +')');

		var line = selection.append('line')
			.attr('y1', 0)
			.attr('y2', 0)
			.attr('x1', scale(events[0].date) )
			.attr('x2', scale( events.slice(-1)[0].date) )
			.attr('stroke-width', 2)
			.attr('stroke', color.brighter(1.3))
			.attr('opacity', .8);

		var e = selection.selectAll('.event')
			.data(events)
			.enter()
				.append('g')
				.classed('event', true)
				.attr('transform', function(d) { return 'translate('+ scale(d.date) +',0)' });

		var node = e.append('circle')
			.attr('r', 5)
			.attr('cx', 0)
			.attr('cy', 0)
			.attr('fill', color);

		++this.count;
	},

	renderDayData : function(d, container) {
		var c = d3.select(container);
		var colors = visualizations.interviewData.colors
		c.selectAll('*').remove();

		if (d) {
			c.append('h2').text( d3.time.format('%d %B')(d.date) );

			var list = c.append('ul')
				.style('list-style', 'none')
				.style('padding', '0');

			if (d.sony.length > 0) {
				list.selectAll('li.sony')
					.data(d.sony)
					.enter()
						.append('li')
						.classed('sony', true)
						.text(function(d) { return d.text })
						.style({ 
							'border-left' : '4px solid' + colors.sony,
							'padding-left' : '1.5em',
							'margin-bottom' : '1em'
						});
			}

			if (d.gop.length > 0) {			
				list.selectAll('li.gop')
					.data(d.gop)
					.enter()
						.append('li')
						.classed('gop', true)
						.text(function(d) { return d.text })
						.style({ 
							'border-left' : '4px solid' + colors.gop,
							'padding-left' : '1.5em',
							'margin-bottom' : '1em'
						});
			}

			if (d.investigators.length > 0) {
				list.selectAll('li.inv')
					.data(d.investigators)
					.enter()
						.append('li')
						.classed('inv', true)
						.text(function(d) { return d.text })
						.style({ 
							'border-left' : '4px solid' + colors.investigators,
							'padding-left' : '1.5em',
							'margin-bottom' : '1em'
						});
			}

			if (d.commentators.length > 0) {			
				list.selectAll('li.com')
					.data(d.commentators)
					.enter()
						.append('li')
						.classed('com', true)
						.text(function(d) { return d.text })
						.style({ 
							'border-left' : '4px solid' + colors.commentators,
							'padding-left' : '1.5em',
							'margin-bottom' : '1em'
						});

			}

			if (d.northKorea.length > 0) {			
				list.selectAll('li.nk')
					.data(d.northKorea)
					.enter()
						.append('li')
						.classed('nk', true)
						.text(function(d) { return d.text })
						.style({ 
							'border-left' : '4px solid' + colors.northKorea,
							'padding-left' : '1.5em',
							'margin-bottom' : '1em'
						});
			}

			if (list.selectAll('li')[0].length == 0) {
				c.append('p')
					.text('No events to show for this date')
					.style({
						'font-style' : 'italic',
						'opacity' : '.5'
					})
			}
		}
	},

	drawConnections : function(selection, color, scale) {
		var nodes = selection.selectAll('.event');

		nodes.selectAll('.connector')
			.data(function(d) {
				if (typeof d.caused === 'object' && d.caused.constructor === Array) {
					return d.caused;
				} else if (typeof d.caused == 'object') {
					return [d.caused];
				}
				return [] })
			.enter()
				.append('path')
				.classed('connector', true)
				.attr('d', function(d, i) {
					var xOffset = d3.transform(d3.select(this.parentNode).attr('transform')).translate[0];
					var targetXPosition = scale(d.date);

					var yOffset = d3.transform(d3.select(this.parentNode.parentNode).attr('transform')).translate[1];
					var targetYPosition = visualizations.interviewData.actorGroupsIndex.indexOf(d.group) * 30;
					var up = false;

					if (targetYPosition - yOffset < 0) {
						targetYPosition += 5;
						up = true;
					} else {
						targetYPosition -= 5;
						up = false;
					}

					var d = d3.svg.diagonal()
						.source({ x : 0, y : up ? -5 : 5 })
						.target({ x : targetXPosition - xOffset, y : targetYPosition - yOffset });

					return d([1]);

				})
				.attr('stroke', d3.rgb(color))
				.attr('stroke-width', 1)
				.attr('fill', 'none')
				.attr('opacity', .5);

	}

}

window.addEventListener('init', function(e) {
	var container = document.querySelector('#case-study-vis-01'),
			w = container.getBoundingClientRect().width * 1.5,
			h = 300,
			stage = d3.select('#case-study-vis-01').append('svg'),
			data = window.visualizations.interviewData,
			behaviors = window.visualizations.interviewBehaviors,
			dateScale = d3.time.scale()
				.domain([data.minDate, data.maxDate])
				.range([0, w - 30]),
			dateFormat = d3.time.format('%b %d'),
			margin = container.getBoundingClientRect().width - (w/2),
			reader = document.querySelector('#case-study-vis-reader-01');

	stage
		.attr('width', w)
		.attr('height', h)
		.style({
			'margin-left' : '-' + margin + 'px',
			'overflow' : 'visible',
			'cursor' : 'crosshair',
		});

	var guide = stage.append('g')
		.classed('guide', true)
		.attr('opacity', 0)
	
	guide.append('line')
		.classed('guide-line', true)
		.attr('x1', 0)
		.attr('y1', 0)
		.attr('x2', 0)
		.attr('y2', '100%')
		.attr('stroke-width', 1)
		.attr('stroke', '#C9C9C9');



	guide.append('text')
		.classed('guide-date', true)
		.attr('transform', 'translate(10,0)')
		.text(dateFormat(dateScale.invert(15)))
		.attr('y', '100%')
		.style({
			'font-family' : '"aktiv-grotesk", sans-serif',
			'font-weight' : '300',
			'fill' : '#8D8E94',
			'font-size' : '12px'
		});

	var yLabels = stage.selectAll('.y-label')
		.data(data.actorGroupsIndex)
		.enter()
			.append('text')
			.classed('y-label', true)
			.text(function(d) { return d })
			.attr('text-anchor', 'end')
			.style({
				'font-family' : '"aktiv-grotesk", sans-serif',
				'font-weight' : '400',
				'fill' : '#8D8E94',
				'font-size' : '12px',
				'text-transform' : 'uppercase',
				'pointer-events' : 'none',
			})
			.attr('transform', function(d, i) { return 'translate(-15, ' + (20 + (i * 30)) + ')'});


	var graph = stage.append('g').classed('graph', true)
		.attr('width', w - 30)
		.attr('transform', 'translate(15,15)'); 

	var sonyTimeline = graph.append('g').classed('sony', true);
	behaviors.addEventsToSelection(sonyTimeline, data.actorGroups.sony.events, dateScale, data.colors.sony);

	var gopTimeline = graph.append('g').classed('gop', true);
	behaviors.addEventsToSelection(gopTimeline, data.actorGroups.gop.events, dateScale, data.colors.gop);

	var invTimeline = graph.append('g').classed('investigators', true);
	behaviors.addEventsToSelection(invTimeline, data.actorGroups.investigators.events, dateScale, data.colors.investigators);

	var comTimeline = graph.append('g').classed('commentators', true);
	behaviors.addEventsToSelection(comTimeline, data.actorGroups.commentators.events, dateScale, data.colors.commentators);

	var nkTimeline = graph.append('g').classed('nk', true);
	behaviors.addEventsToSelection(nkTimeline, data.actorGroups.northKorea.events, dateScale, data.colors.northKorea);
	
	behaviors.drawConnections(sonyTimeline, data.colors.sony, dateScale);	
	behaviors.drawConnections(gopTimeline, data.colors.gop, dateScale);
	behaviors.drawConnections(invTimeline, data.colors.investigators, dateScale);	
	behaviors.drawConnections(comTimeline, data.colors.commentators, dateScale);
	behaviors.drawConnections(nkTimeline, data.colors.northKorea, dateScale);		

	h = graph[0][0].getBoundingClientRect().height + 50;

	guide.append('path')
		.attr('d', d3.svg.symbol().type('triangle-down').size(8))
		.attr('fill' , '#8D8E94')

	guide.append('path')
		.attr('d', d3.svg.symbol().type('triangle-up').size(8))
		.attr('fill', '#8D8E94')
		.attr('transform','translate(0,'+ (h - 2) +')');

	stage.attr('height', h);

	stage.on('mousemove', function(e) {
		var x = d3.mouse(this)[0];
		var d = guide.select('.guide-date')
			.text(dateFormat(dateScale.invert(x)))
		guide.attr('transform', 'translate('+ x +',0)');
		var textWidth = d[0][0].getBoundingClientRect().width;
		if (textWidth > (w - 15) - x) {
			d.attr('transform', 'translate(-10,0)')
				.attr('text-anchor', 'end')
		} else {
			d.attr('transform', 'translate(10,0)')
				.attr('text-anchor', 'start')
		}

		var currentDay = Math.floor(Math.abs(new Date(dateScale.invert(x)).getTime() - visualizations.interviewData.minDate.getTime()) / msecPerDay);
		var dayData = visualizations.interviewData.eventsByDate[currentDay];

		behaviors.renderDayData(dayData, reader);
	});

	stage.on('mouseover', function(e) {
		guide.attr('opacity', 1);
	});

	stage.on('mouseleave', function(e) {
		guide.attr('opacity', 0);
		behaviors.renderDayData(null, reader);
	});
})