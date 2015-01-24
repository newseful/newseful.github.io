var width = window.innerWidth - 350,
		height = window.innerHeight;

var stage = d3.select('#dictionary')
	.append('svg')
	.attr('width', width)
	.attr('height', height);

var force = d3.layout.force()
	.charge(-500)
	.linkDistance(10)
	.size([width, height])
	.nodes(dictionary.terms)
	.links(dictionary.links)
	.start();

var link = stage.selectAll('.link')
	.data(dictionary.links)
	.enter()
		.append('line')
		.attr('class', 'link');

var node = stage.selectAll('.node')
	.data(dictionary.terms)
	.enter()
		.append('circle')
		.attr('class','node')
		.attr('r', 5)
		.attr('data-index', function(d) { return d.index })
		.call(force.drag);

var tip = d3.select('#dictionary').append('div')
	.attr('id','tooltip')
	.style({
		'position' : 'absolute',
		'opacity' : '0'
	});

var tipTitle = tip.append('h2')
	.attr('class', 'tip-title');

force.on('tick', function() {
  node.attr('cx', function(d) { return d.x; })
      .attr('cy', function(d) { return d.y; });
  
	link.attr('x1', function(d) { return d.source.x })
			.attr('y1', function(d) { return d.source.y })
			.attr('x2', function(d) { return d.target.x })
			.attr('y2', function(d) { return d.target.y })
});

node.on('mouseover', function(d) {
	behaviors.hoverNode(this, d);
});

node.on('mouseout', function(d) {
	behaviors.unHoverNode(this, d);
});

node.on('click', function(d) {
	behaviors.selectNode(this, d);
})
