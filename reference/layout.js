var width = window.innerWidth - 325 - 70,
		height = window.innerHeight;

var stage = d3.select('#dictionary')
	.append('svg')
	.attr('width', width)
	.attr('height', height)
	.style('left', "70px");

var categoricalGravity = false;

var categoryData = [];

for (var i = 0; i < dictionary.categories.length; i++) {
	categoryData.push({ cat : dictionary.categories[i] });
}

var tagData = [];

var tagConnections = [];

var tagGravity = false;

for (var i = 0; i < dictionary.tags.length; i++) {
	tagData.push({
		tag : dictionary.tags[i]
	})
}

for (var i = 0; i < tagData.length; i++) {
	var t = tagData[i];
	var p = ( function(){
		if ( i < 1 ) { 
			return tagData.length - 1  
		}

		return i - 1;
	})();

	var n = ( function() {
		if (i == tagData.length - 1) {
			return 0
		}
		return i + 1;
	})();

	tagConnections.push({
		source : i,
		target : p
	});

	tagConnections.push({
		source : i,
		target : n
	})
}

var categoryFociDistributor = d3.layout.force()
	.charge(-1500)
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

var tagFociDistributor = d3.layout.force()
	.charge(-1500)
	.size([width, height])
	.gravity(0.03)
	.links(tagConnections)
	.nodes(tagData)
	.linkStrength(.8)
	.linkDistance(function() {
		var tau = Math.PI * 2,
				r = (width - 150) / 4,
				c = tau * r,
				d = c / tagData.length;
		return d;
	})
	.start()

var tagFoci = stage.selectAll('.tag-node')
	.data(tagData)
	.enter()
		.append('circle')
		.classed('tag-node', true)
		.attr('r', '20')
		.attr('opacity', '0');

var tagLink = stage.selectAll('.tag-link')
	.data(tagConnections)
	.enter()
		.append('line')
		.classed('tag-link', true)
		.attr('stroke', '#292929')
		.attr('stroke-width', 1)

tagFociDistributor.on('tick', function(e) {
	tagFoci.attr('cx', function(d) { return d.x })
		.attr('cy', function(d) { return d.y });

	d3.select('#tag-list').selectAll('.tag')
		.style('top', function(d){ return d.y + 'px' })
		.style('left', function(d) { return d.x + 70 + 'px' });

	// d3.selectAll('.tag-link')
	// 	.attr('x1', function(d) { return d.source.x })
	// 	.attr('x2', function(d) { return d.target.x })
	// 	.attr('y1', function(d) { return d.source.y })
	// 	.attr('y2', function(d) { return d.target.y })
})

var force = d3.layout.force()
	.charge(-300)
	.size([width, height])
	.nodes(dictionary.terms)
	.links(dictionary.links)
	.linkStrength(0.5)
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
		.style('display' , 'none')
		.attr('data-index', function(d, i) { return i })
		.call(force.drag);

force.on('tick', function(e) {
	force.links(dictionary.links).gravity(0.2).charge(-300).chargeDistance(5000);
	link.style('opacity', '1');

	var k = e.alpha * .3;

	if (behaviors.categoricalGravity) {
		force.links([]).gravity(0);
		link.style('opacity', '0');
		for (var i = 0; i < dictionary.terms.length; i++) {
			o = dictionary.terms[i];
			var c = categoryData[o.cat];
			o.x += (c.x - o.x) * k;
			o.y += (c.y - o.y) * k;
		}

	}

	if (behaviors.tagGravity) {
		force.links([]).gravity(0).charge(-50).chargeDistance(50);
		link.style('opacity', '0');

		for (var i = 0; i < dictionary.terms.length; i++) {

			o = dictionary.terms[i];

			for (var j = 0; j < o.tags.length; j++) {
				var c = tagData[dictionary.tags.indexOf(o.tags[j])];
				o.x += (c.x - o.x) * k;
				o.y += (c.y - o.y) * k;
			}
		}
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
	behaviors.hoverNode(this, d, behaviors.tagGravity);
});

node.on('mouseout', function(d) {
	behaviors.unHoverNode(this, d);
});

node.on('click', function(d) {
	behaviors.selectNode(this, d);
});