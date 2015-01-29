var width = 70,
		height = Converter.vhToPx(90) - 60;

var mouse = {
	x : 0,
	y : 0,
	isHovering : false
};

var schedule = d3.select('#schedule').append('svg')
	.attr('width', width)
	.attr('height', height)
	.style('margin-top', '30px');

var data = calendar.cal;

var scale = d3.scale.ordinal()
	.domain(d3.range(data.length))
	.rangePoints([0, height]);

var reverseScale = d3.scale.linear()
	.domain([0, height])
	.range([0, data.length - 1]);

var firstDay = new Date("2015-01-20");
var lastDay = new Date("2015-05-05");

var today = new Date();

var timeScale = d3.time.scale()
	.domain([firstDay, lastDay])
	.range([0, height]);

var guide = schedule.append("g")
	.classed("guide", true)
	.style('opacity', '0')
	.attr('transform', 'translate(0,50)')

guide.append("line")
		.attr('x1', 0)
		.attr('x2', width)
		.attr('y1', 0)
		.attr('y2', 0)

guide.append("path")
	.attr('d', d3.svg.symbol().type("triangle-up").size(50))
	.attr("transform", "translate(" + (width - 3) + ",0) rotate(-90) scale(1.5)")
	.classed('schedule-connector', true);

var ticks = schedule.selectAll(".tick")
	.data(data)
	.enter()
		.append("line")
		.classed("tick", true)
		.attr('x1', 0)
		.attr('x2', 12)
		.attr('y1', function(d,i) { return scale.range()[i] })
		.attr('y2', function(d,i) { return scale.range()[i] });

var progress = schedule.append("path")
	.classed("progress", true)
	.attr("transform", "translate(0," + timeScale(today) + ") rotate(90) scale(1.5)")
	.attr("d", d3.svg.symbol().type("triangle-up"));

var eventContainer = schedule.selectAll(".events")
	.data(data)
	.enter()
		.append("g")
		.classed("events", true)
		.attr('transform', function(d, i) { return "translate(20," + scale.range()[i] + ")" });

eventContainer.selectAll(".due")
	.data(function(d, i) { return d.tasks.due })
	.enter()
		.append("path")
		.classed("due", true)
		.attr("d", d3.svg.symbol().type("square").size(20))
		.attr("transform", function(d,i) {  return "translate(" + (Array.prototype.indexOf.call(this.parentNode.childNodes, this) * 8) +", 0) rotate(45)" })

eventContainer.selectAll(".wip")
	.data(function(d, i) { return d.tasks.wip })
	.enter()
		.append("path")
		.classed("wip", true)
		.attr("d", d3.svg.symbol().type("square").size(20))
		.attr("transform", function(d,i) {  return "translate(" + (Array.prototype.indexOf.call(this.parentNode.childNodes, this) * 8) +", 0) rotate(45)" })

var srData = [data[0]];

var updateScheduleReader = function( hidden, y ) {

	var scheduleReader = d3.select("#navigator").selectAll("#schedule-reader")
		.data(srData)
		.classed("hidden", hidden)
		.style('top', y + 'px')
		
	scheduleReader.enter()
		.append("div")
		.attr("id", "schedule-reader")
		.classed("hidden", hidden)
		.style('top', y + 'px');

	scheduleReader.exit().remove();

	var selection = scheduleReader.selectAll(".week-title")
		.data(srData)
		.text(function(d) { return d.week });
	
	selection.enter()
		.append("h2")
		.classed("week-title", true)
		.text(function(d) { return d.week });

	selection.exit().remove();


	var dueList = scheduleReader.selectAll(".due-list")
		.data(srData);

	dueList.enter()
			.append("ul")
			.classed("due-list", true);

	dueList.exit().remove();

	var wipList = scheduleReader.selectAll(".wip-list")
		.data(srData);

	wipList.enter()
			.append("ul")
			.classed("wip-list", true);

	wipList.exit().remove();

	var dlSelection = dueList.selectAll("li")
		.data(function(d) { return d.tasks.due })
		.text(function(d) { return d })
	
	dlSelection.enter()
		.append("li")
		.text(function(d) { return d })

	dlSelection.exit().remove();

	var wipSelection = wipList.selectAll("li")
		.data(function(d) { return d.tasks.wip })
		.text(function(d) { return d });
	
	wipSelection.enter()
			.append("li")
			.text(function(d) { return d });
	
	wipSelection.exit().remove();

}

updateScheduleReader(true)

schedule.on("mousemove", function(event) {
	guide.style('opacity', '1')
		.attr('transform', 'translate(0,' + d3.mouse(this)[1] + ')');

	var currentWeek = Math.ceil(reverseScale(d3.mouse(this)[1]));

	srData[0] = data[currentWeek];
	updateScheduleReader(false, d3.event.y);
});

schedule.on("mouseout", function() {
	guide.style('opacity', '0');
	updateScheduleReader(true);
})