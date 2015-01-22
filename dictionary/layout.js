var width = window.innerWidth,
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

var node = stage.selectAll('.node')
	.data(dictionary.terms)
	.enter()
		.append('circle')
		.attr('class','node')
		.attr('r', 5)
		.call(force.drag);

var link = stage.selectAll('.link')
	.data(dictionary.links)
	.enter()
		.append('line')
		.attr('class', 'link');

var tip = d3.select('#dictionary').append('div')
	.attr('id','tooltip')
	.style({
		'position' : 'absolute',
		'background' : 'rgba(0,0,0,0.8)',
		'padding' : '20px',
		'width' : '350px',
		'color' : '#FFF',
		'opacity' : 0
	});

var tipTitle = tip.append('h2')
	.attr('class', 'tip-title')

var tipText = tip.append('p')

force.on('tick', function() {
  node.attr('cx', function(d) { return d.x; })
      .attr('cy', function(d) { return d.y; });
  
	link.attr('x1', function(d) { return d.source.x })
			.attr('y1', function(d) { return d.source.y })
			.attr('x2', function(d) { return d.target.x })
			.attr('y2', function(d) { return d.target.y })
});

node.on('mouseover', function(d) {
	tip.style({
		'left' : d.x + 20 + 'px',
		'top' : d.y + 'px',
		'opacity' : 1
	});

	tipTitle.text(d.term);
	tipText.text(d.definition);
});

node.on('mouseout', function() {
	tip.style({
		'top' : 0,
		'left' : 0,
		'opacity' : 0
	});
})
