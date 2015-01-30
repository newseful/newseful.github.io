var width = window.innerWidth - 325 - 70,
		height = window.innerHeight;

var stage = d3.select('#dictionary')
	.append('svg')
	.attr('width', width)
	.attr('height', height)
	.style('left', "70px");

var categoryData = [];

for (var i = 0; i < dictionary.categories.length; i++) {
	categoryData.push({ cat : dictionary.categories[i] });
}

var categoryFociDistributor = d3.layout.force()
	.charge(-2000)
	.size([width, height])
	.nodes(categoryData)

categoryFociDistributor.start()

var categoricalNodes = stage.selectAll('.categorical-node')
	.data(categoryData)
	.enter()
		.append('circle')
		.classed('categorical-node', true)
		.attr('r', '20')
		.style('opacity', 0);


categoryFociDistributor.on('tick', function(e) {
	categoricalNodes
		.attr('cx', function(d) { return d.x })
		.attr('cy', function(d) { return d.y })
});

var force = d3.layout.force()
	.charge(-300)
	.size([width, height])
	.nodes(dictionary.terms)
	.links(dictionary.links)
	.start();

var gradient = stage.append('defs').selectAll('linearGradient')
	.data(dictionary.links)
	.enter()
		.append('linearGradient')
		.attr('id', function(d, i) { return 'gradient-link-' + i })
		.attr('x1', '0')
		.attr('y1', '0')
		.attr('x2', '0')
		.attr('y2', '0')
		.attr('gradientUnits', 'userSpaceOnUse');

gradient.append("svg:stop")
	.attr("offset", "0%")
	.attr("stop-color", "#4D4D4D");

gradient.append("svg:stop")
	.attr("offset", "100%")
	.attr("stop-color", "#212121");


var link = stage.selectAll('.link')
	.data(dictionary.links)
	.enter()
		.append('line')
		.attr('class', 'link')
		.attr('stroke', function(d,i) { return 'url(#gradient-link-' + i + ')' });

var node = stage.selectAll('.node')
	.data(dictionary.terms)
	.enter()
		.append('circle')
		.classed('node', true)
		.attr('data-category', function(d) { return d.cat })
		.attr('r', 4)
		.attr('data-index', function(d) { return d.index })
		.call(force.drag);

var nodeLabel = stage.selectAll('.node-label')
	.data(dictionary.terms)
	.enter()
		.append('text')
		.attr('class','node-label')
		.text(function(d) { return d.term })
		.attr('transform', 'translate(20,6)')
		.style('opacity', '0')
		.attr('data-index', function(d, i) { return i })
		.call(force.drag);

force.on('tick', function(e) {

	var k = e.alpha * .1;

	for (var i = 0; i < dictionary.terms.length; i++) {
		o = dictionary.terms[i];
		if (o.fixed) continue;
		c = categoryData[o.cat];
		o.x += (c.x - o.x) * k;
		o.y += (c.y - o.y) * k;
	}

  gradient.attr('x1', function(d) { return d.source.x })
  	.attr('y1', function(d) { return d.source.y })
  	.attr('x2', function(d) { return d.target.x })
  	.attr('y2', function(d) { return d.target.y });
  
	link.attr('x1', function(d) { return d.source.x })
			.attr('y1', function(d) { return d.source.y })
			.attr('x2', function(d) { return d.target.x })
			.attr('y2', function(d) { return d.target.y })

	node.attr('cx', function(d) { return d.x; })
      .attr('cy', function(d) { return d.y; });

  nodeLabel.attr('x', function(d) { return d.x })
  	.attr('y', function(d) { return d.y });t
});

node.on('mouseover', function(d) {
	behaviors.hoverNode(this, d);
});

node.on('mouseout', function(d) {
	behaviors.unHoverNode(this, d);
});

node.on('click', function(d) {
	behaviors.selectNode(this, d);
});