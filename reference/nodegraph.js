var NodeGraph = function( stage, w, h, d, controller ) { 
	var n = {

		// Layout variables
		w : w,
		h : h,
		stage : stage,

		// controller
		controller : controller,

		// Data variables
		// Set in initialize
		dictionary : d,
		categoryData : [],
		tagData : [],
		tagConnections : [],
		termData : d.terms,
		termConnections : d.links,
		circularTermConnections : [],

		tagGravity : false,
		categoricalGravity : false,
		circularLayout : false,

		// Generators
		setCategoryData : function(c) {
			for (var i = 0; i < c.length; ++i) {
				this.categoryData.push({ cat : c[i] });
			}
		},
		setTagData : function(t) {
			// Formats dictionary tag list as object list
			// So that d3 can bind data to it
			for (var i = 0; i < t.length; ++i) {
				this.tagData.push({
					tag : this.dictionary.tags[i]
				});
			}
		},
		buildCircularConnectionMap : function(src, destination) {
			// Generates a list of connections
			// connecting adjacent tags so that layout.force
			// can form them into an even circle
			for (var i = 0; i < src.length; ++i) {
				var p = ( function(){
					if ( i < 1 ) { 
						return src.length - 1  
					}
					return i - 1;
				})();
				var n = ( function() {
					if (i == src.length - 1) {
						return 0
					}
					return i + 1;
				})();
				destination.push({
					source : i,
					target : p
				});
				destination.push({
					source : i,
					target : n
				});
			}
		},

		// FORCES
		CategoryFociDistributor : d3.layout.force(),

		TagFociDistributor : d3.layout.force(),

		NodeDistributor : d3.layout.force(),

		beginForces : function() {

			var _this = this;

			// Set these things after data props have been initiated
			this.CategoryFociDistributor
				.charge(-1000)
				.size([this.w, this.h])
				.nodes(this.categoryData),

			this.TagFociDistributor
				.charge(-1500)
				.size([this.w, this.h])
				.gravity(0.03)
				.links(this.tagConnections)
				.nodes(this.tagData)
				.linkStrength(.8)
				.linkDistance(function() {
					var tau = Math.PI * 2,
							r = (_this.w - 150) / 3,
							c = tau * r,
							d = c / _this.tagData.length;
					return d;
				}),

			this.NodeDistributor
				.charge(-300)
				.size([this.w, this.h])
				.nodes(this.termData)
				.links(this.termConnections)
				.linkStrength(0.5),

			this.CategoryFociDistributor.start()
			this.TagFociDistributor.start()
			this.NodeDistributor.start()

			this.CategoryFociDistributor.on('tick', function(e) {
				_this.updateCategoryNode();
			});

			this.TagFociDistributor.on('tick', function(e) {
				_this.updateTagNode();
			});

			this.NodeDistributor.on('tick', function(e) {
				_this.updateNode(e);
			});

			this.updateForce();

		},

		forceBump : function() {
			this.TagFociDistributor.resume();
			this.CategoryFociDistributor.resume();
			this.NodeDistributor.resume();
		},

		updateForce : function(gravityType) {
			var _this = this;

			switch (gravityType) {
				case 'categorical':
					this.NodeDistributor.links([]).gravity(0).charge(-300).chargeDistance(5000).start();
					this.link.style('opacity', '0');
					this.tagNode.style('display', 'none');
					break;
				case 'tag':
					this.NodeDistributor.links([]).gravity(0).charge(-300).chargeDistance(300).start();
					this.link.style('opacity', '0');
					this.tagNode.style('display', 'block');
					break;
				case 'circular':
					this.link.style('opacity', '0');
					this.tagNode.style('display', 'none');
			  	this.NodeDistributor
			  		.links(this.circularTermConnections)
			  		.linkStrength(1)
			  		.linkDistance(function(d) {
							var tau = Math.PI * 2,
									r = (_this.w - 150) / 4,
									c = tau * r,
									l = c / _this.circularTermConnections.length;			
							return l; })
			  		.gravity(0.006)
			  		.charge(-20)
			  		.chargeDistance(5000)
			  		.start();
			  	break;
			  default:
			  	this.NodeDistributor
			  		.links(this.termConnections)
			  		.gravity(0.2)
			  		.charge(-300)
			  		.chargeDistance(5000)
						.linkStrength(0.5)
						.start();

					this.link.style('opacity', '1');
					this.tagNode.style('display', 'none');
			}
		},

		// NODES, LINKS
		categoricalNode : '.categorical-node',

		tagNode : '.tag-node',

		gradient : 'linearGradient',

		link : '.link',

		node : '.node',

		nodeLabel : '.node-label',

		populate : function() {
			this.categoricalNode = this.stage.selectAll(this.categoricalNode).data(this.categoryData);
			this.tagNode = this.stage.selectAll(this.tagNode).data(this.tagData);
			this.gradient = this.stage.append('defs').selectAll('linearGradient').data(this.termConnections);
			this.link = this.stage.selectAll(this.link).data(this.termConnections);
			this.node = this.stage.selectAll(this.node).data(this.termData);
			this.nodeLabel = this.stage.selectAll(this.nodeLabe).data(this.termData);

			// Categorical enter/update
			this.categoricalNode
				.enter()
					.append('circle')
					.classed('categorical-node', true)
					.attr('r', 20)
					.style('opacity', 0);

			this.categoricalNode.exit().remove();

			// Tag node enter/exit
			var tg = this.tagNode
				.enter()
					.append('g')
					.classed('tag-node', true)

			var text = tg.append('text')
				.text(function(d) { return d.tag })
				.attr('x', 10)
				.attr('y', function(d) { return this.parentNode.getBBox().height + 2.5 })
				.attr('text-anchor', 'middle');

			var box = tg.insert('rect', 'text')
				.attr('x', function(d) { return -1 * ((this.parentNode.getBBox().width)/2) })
				.attr('y', 0)
				.attr('width', function(d) { return this.parentNode.getBBox().width + 20  })
				.attr('height', function(d) { return this.parentNode.getBBox().height + 10 })
				.attr('rx', 4)
				.attr('ry', 4)
					

			this.tagNode.exit().remove()

			// Gradient enter/update
			var g = this.gradient
				.enter()
					.append('linearGradient')
					.attr('id', function(d, i) { return 'gradient-link-' + i })
					.attr('gradientUnits', 'userSpaceOnUse');

			g.append("svg:stop")
					.attr("offset", "0%")
					.attr("stop-color", "#4D4D4D");

			g.append("svg:stop")
				.attr("offset", "100%")
				.attr("stop-color", "#212121");

		  this.gradient.exit().remove();

		 	// link enter/exit
		 	this.link
				.enter()
					.append('line')
					.attr('class', 'link')
					.attr('stroke', function(d,i) { return 'url(#gradient-link-' + i + ')' });

			this.link.exit().remove();

			// node enter/exit
			this.node
				.enter()
					.append('circle')
					.classed('node', true)
					.attr('data-category', function(d) { return d.cat })
					.attr('r', 4)
					.attr('data-index', function(d) { return d.index })
					.call(this.NodeDistributor.drag);

			this.node.exit().remove();

			// nodeLabel enter/exit
			this.nodeLabel
				.enter()
					.append('text')
					.attr('class','node-label')
					.text(function(d) { return d.term })
					.attr('transform', 'translate(20,6)')
					.style('display' , 'none')
					.attr('data-index', function(d, i) { return i });

			this.nodeLabel.exit().remove();
		},

		updateCategoryNode : function() {
			this.categoricalNode
				.attr('cx', function(d) { return d.x })
				.attr('cy', function(d) { return d.y });
		},

		updateTagNode : function() {
			this.tagNode
				.attr('transform', function(d) { return 'translate(' + d.x + ', ' + d.y + ')'});

			d3.select('#tag-list').selectAll('.tag')
				.style('top', function(d){ return d.y + 'px' })
				.style('left', function(d) { return d.x + 70 + 'px' });
		},

		updateNode : function(e) {

		  // Calculate gravitational things
		  var k = e.alpha * 0.3;
		  var _this = this;

		  if (this.tagGravity) {

		  	for (var i = 0; i < this.termData.length; ++i) {
					o = this.termData[i];
					for (var j = 0; j < o.tags.length; j++) {
						var c = this.tagData[ this.dictionary.tags.indexOf( o.tags[j] ) ];
						o.x += ((c.x - o.x) * k);
						o.y += ((c.y - o.y) * k);
					}
				}

		  } else if (this.categoricalGravity) {

				for (var i = 0; i < this.termData.length; i++) {
					o = this.termData[i];
					var c = this.categoryData[o.cat];
					o.x += (c.x - o.x) * k;
					o.y += (c.y - o.y) * k;
				}
		  }

		  // Update link and node positions
		  this.link
		  	.attr('x1', function(d) { return d.source.x })
				.attr('y1', function(d) { return d.source.y })
				.attr('x2', function(d) { return d.target.x })
				.attr('y2', function(d) { return d.target.y })

			this.node
				.attr('cx', function(d) { return d.x; })
		    .attr('cy', function(d) { return d.y; });

		  this.nodeLabel
		  	.attr('x', function(d) { return d.x })
		  	.attr('y', function(d) { return d.y });

		  this.gradient
				.attr('x1', function(d) { return d.source.x })
		  	.attr('y1', function(d) { return d.source.y })
		  	.attr('x2', function(d) { return d.target.x })
		  	.attr('y2', function(d) { return d.target.y });

		},

		// Behaviors
		hoverNode : function(n) {
			var node = d3.select(n);

			node
				.transition()
				.duration(350)
				.ease('elastic')
				.attr('r',10);

			this.nodeLabel
				.filter(function(d, i) { return i == node.datum().index })
				.style('display', 'block')

			this.tagNode.classed('highlight', false);

			this.tagNode.filter(function(d, i) {
				for (var i = 0; i < node.datum().tags.length; ++i) {
					if (d.tag == node.datum().tags[i]) {
						return true
					}
				}
				return false;
			}).classed('highlight', true);
		},

		unHoverNode : function(n) {
			var isCurrentlySelected = false;

			var node = d3.select(n).filter(function(d,i) {
				isCurrentlySelected = this.classList.contains("selected");
				return !isCurrentlySelected;
			});

			if (!isCurrentlySelected) {
				node
					.transition()
					.duration(350)
					.ease('elastic')
					.attr('r',5);

				this.nodeLabel
					.filter(function(d, i) { return i == node.datum().index })
					.style('display', 'none');
			}

			this.tagNode.classed('highlight', false);
		},

		selectNode : function(n) {
			var node = d3.select(n);
			var _this = this;

			this.node
				.classed('selected', false);

			node
				.classed('selected', true)
				.attr('r', 10);

			this.node
				.each(function(d) { 
					_this.unHoverNode(this);
				});

			return node;
		},

		hoverNodes : function(ns) {
			var _this = this;
			ns.each(function(d) { _this.hoverNode(this) });
		},

		unHoverNodes : function(ns) {
			var _this = this;
			ns.each(function(d) { _this.unHoverNode(this) });
		},

		nodesForTagName : function(tagName) {
			var terms = this.dictionary.termsByTagName(tagName);
			return this.node.filter(function(d, i) { return terms.indexOf(d.term) > -1 })
		},

		nodeForIndex : function(c) {
			c = parseInt(c);
			return this.node.filter(function(d, i) { return c == i })[0][0];
		},

		addListeners : function() {
			var _this = this;

			this.node.on('mouseover', function(e) {
				_this.controller.notify('hover term', d3.select(this).datum().index);
			});

			this.node.on('mouseout', function(e) {
				_this.controller.notify('unhover term', d3.select(this).datum().index);
			});

			this.node.on('click', function(e) {
				_this.controller.notify('select term', d3.select(this).datum().index);
			});

			this.tagNode.on('mouseover', function(e) {
				_this.controller.notify('hover tag', d3.select(this).datum().tag);
			});

			this.tagNode.on('mouseout', function(e) {
				_this.controller.notify('unhover tag', d3.select(this).datum().tag);
			})
		},

		// Initializer
		init : function() {
			console.log('init nodeGraph');

			_this = this;

			// Create/format internal data properties
			this.setCategoryData(this.dictionary.categories);
			this.setTagData(this.dictionary.tags);
			this.buildCircularConnectionMap(this.tagData, this.tagConnections);
			this.buildCircularConnectionMap(this.termData, this.circularTermConnections);

			// Set things into motion
			this.populate();
			this.beginForces();
			this.addListeners();

			return this;
		}

	}

	return n.init();
}