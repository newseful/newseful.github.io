var width = 70,
		height = Converter.vhToPx(90) - 60;

var mouse = {
	x : 0,
	y : 0,
	isHovering : false
};

var wHeight = window.innerHeight;

var schedule = d3.select('#schedule').append('svg')
	.attr('width', width)
	.attr('height', height)
	.style('margin-top', '30px');

var data = calendar.cal;

var presDates = [7,12];

var scale = d3.scale.ordinal()
	.domain(d3.range(data.length))
	.rangePoints([0, height]);

var reverseScale = d3.scale.linear()
	.domain([0, height])
	.range([0, data.length - 1]);

var firstDay = new Date("2015-01-20");
var lastDay = new Date("2015-05-05");

var clamp = function(el, y) {
	if (y > (wHeight - (.5 * el.offsetHeight))) {
		return wHeight - (.5 * el.offsetHeight);
	}  else if (y < .5 * el.offsetHeight) {
		return .5 * el.offsetHeight;
	}

	return y;
}

var today = new Date();

var timeScale = d3.time.scale()
	.domain([firstDay, lastDay])
	.range([0, height]);

var currentWeekSelector = schedule.append("rect")
	.classed("current-week", true)
	.attr("width", 69)
	.attr("height", function() { return scale.range()[1] - scale.range()[0] })
	.attr("x", 0)
	.attr("y", 0)
	.style("opacity", "0")

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

var progress = schedule.append("path")
	.classed("progress", true)
	.attr("transform", "translate(0," + timeScale(today) + ") rotate(90) scale(1.5)")
	.attr("d", d3.svg.symbol().type("triangle-up"));

var eventContainer = schedule.selectAll(".events")
	.data(data)

eventContainer.enter()
		.append("g")
		.classed("events", true)
		.attr('transform', function(d, i) { return "translate(18," + scale.range()[i] + ")" });

eventContainer
	.append("path")
	.classed({ "pres" : true, "remove" : function(d,i) { return !(presDates.indexOf(i) > -1) } })
	.attr("d", d3.svg.symbol().type("square").size(20))
	.attr("transform", function(d,i) {  return "translate(" + ( Array.prototype.indexOf.call( this.parentNode.childNodes, this ) * 10 ) +", 0) rotate(45)" });

eventContainer.selectAll(".remove").remove();

eventContainer.selectAll(".due")
	.data(function(d, i) { return d.tasks.due })
	.enter()
		.append("path")
		.classed("due", true)
		.attr("d", d3.svg.symbol().type("square").size(20))
		.attr("transform", function(d,i) {  return "translate(" + (Array.prototype.indexOf.call(this.parentNode.childNodes, this) * 10) +", 0) rotate(45)" })

eventContainer.selectAll(".wip")
	.data(function(d, i) { return d.tasks.wip })
	.enter()
		.append("path")
		.classed("wip", true)
		.attr("d", d3.svg.symbol().type("square").size(20))
		.attr("transform", function(d,i) {  return "translate(" + (Array.prototype.indexOf.call(this.parentNode.childNodes, this) * 10) +", 0) rotate(45)" })

var srData = [data[0]];

var updateScheduleReader = function( hidden, y, currentWeek ) {

	// Big parent data bind
	var scheduleReader = d3.select("#navigator").selectAll("#schedule-reader")
		.data(srData)
	
	// Enter	
	scheduleReader.enter()
		.append("div")
		.attr("id", "schedule-reader")

	// Update
	scheduleReader
		.classed({"hidden" : hidden, "panel-review" : function(d,i) { return presDates.indexOf(currentWeek) > -1 } })
		.style('top', function(d, i) { 
			return clamp(this, y) + 'px';
		})

	// Exit
	scheduleReader.exit().remove();

	// Data bind again
	var selection = scheduleReader.selectAll(".week-title")
		.data(srData)
	
	// Enter
	selection.enter()
		.append("h2")
		.classed("week-title", true)
	
	// Update
	selection.text(function(d) { return d.week });

	// Exit
	selection.exit().remove();

	// Data bind
	var dueList = scheduleReader.selectAll(".due-list")
		.data(srData);

	// Enter
	dueList.enter()
			.append("ul")
			.classed("due-list", true);

	// Exit
	dueList.exit().remove();

	// Data bind
	var wipList = scheduleReader.selectAll(".wip-list")
		.data(srData);

	// Enter
	wipList.enter()
			.append("ul")
			.classed("wip-list", true);

	// Exit
	wipList.exit().remove();

	// Data bind
	var dlSelection = dueList.selectAll("li")
		.data(function(d) { return d.tasks.due })
	
	// Enter
	dlSelection.enter()
		.append("li")

	// Update
	dlSelection.text(function(d) { return d })

	// Exit
	dlSelection.exit().remove();

	// Data bind
	var wipSelection = wipList.selectAll("li")
		.data(function(d) { return d.tasks.wip })
		
	// Enter
	wipSelection.enter()
			.append("li")

	// Update
	wipSelection.text(function(d) { return d });
	
	// Exit
	wipSelection.exit().remove();

}

updateScheduleReader(true)

schedule.on("mousemove", function(event) {
	if (d3.event.clientY){
		guide.style('opacity', '1')
			.attr('transform', 'translate(0,' + d3.mouse(this)[1] + ')');

		var currentWeek = Math.ceil(reverseScale(d3.mouse(this)[1]));

		currentWeekSelector
			.style("opacity", "1")
			.transition()
			.duration(50)
			.attr("transform", function() { return "translate(0,"+ scale(currentWeek - 1) +")" })

		srData[0] = data[currentWeek];

		updateScheduleReader(false, d3.event.clientY, currentWeek);
	}
});

schedule.on("mouseout", function() {

	guide.style('opacity', '0');

	currentWeekSelector
		.style("opacity", 0)

	updateScheduleReader(true);
})