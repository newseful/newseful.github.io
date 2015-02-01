var width = window.innerWidth - 325 - 70,
		height = window.innerHeight;

var stage = d3.select('#dictionary')
	.append('svg')
	.attr('width', width)
	.attr('height', height)
	.style('left', "70px");

var DictionaryController = function(dictionary) {
	var dc = {

		nodeGraph : new NodeGraph(stage, width, height, window.dictionary, this),
		reader : new Reader(window.dictionary.terms, this),
		dictionary : dictionary,

		addListeners : function() {
			var ng = this.nodeGraph;
			var r = this.reader;
			var _this = this;

			window.addEventListener('keyup', function(e) {
				if (!r.inputIsFocused) {
					// change gravity for nodegraph
					if (e.keyCode == 67 && !ng.categoricalGravity) {
						ng.categoricalGravity = true;
						ng.tagGravity = false;
						ng.forceBump();
					} else if (e.keyCode == 84 && !ng.tagGravity) {
						ng.categoricalGravity = false;
						ng.tagGravity = true;
						ng.forceBump();
					} else if (e.keyCode == 76) {
						ng.categoricalGravity = false;
						ng.tagGravity = false;
						ng.forceBump();
					}
				}
			});
		},

		notify : function(notification, i) {
			var _this = this;

			switch (notification) {
				case 'hover term':
					this.nodeGraph.hoverNode(this.nodeGraph.nodeForIndex(i));
					break;
				case 'unhover term':
					this.nodeGraph.unHoverNode(this.nodeGraph.nodeForIndex(i));
					break;
				case 'select term':
					this.nodeGraph.selectNode(this.nodeGraph.nodeForIndex(i));
					this.reader.render(this.dictionary.terms[i]);
					break;
				case 'tag elements created':
					for (var c = 0; c < i.length; ++c) {
						i[c].addEventListener('mouseenter', function() {
							_this.nodeGraph.hoverNodes(_this.nodeGraph.nodesForTagName(this.dataset.tagName));
						});
						i[c].addEventListener('mouseout', function() {
							_this.nodeGraph.unHoverNodes(_this.nodeGraph.nodesForTagName(this.dataset.tagName));
						});
					}
					break;
				case 'hover tag':
					this.nodeGraph.hoverNodes(_this.nodeGraph.nodesForTagName(i));
					break;
				case 'unhover tag':
					this.nodeGraph.unHoverNodes(_this.nodeGraph.nodesForTagName(i));
				default:
					// do nothing
			}
		},

		init : function() {
			console.log("controller init");
			this.addListeners();
			this.reader.render();

			this.nodeGraph.controller = dc;
			this.reader.controller = dc;

			return this;	
		}

	}

	return dc.init();
}

var ChartBehaviorManager = function() {

	return {

		hoverNodesForTag : function(tagName) {
			var nodes = this.getNodesByTagName(tagName);
			var indices = this.getIndexListFromNodeList(nodes);
			this.hoverNodes(indices);
		},

		unHoverNodesForTag : function(tagName) {
			var nodes = this.getNodesByTagName(tagName);
			var indices = this.getIndexListFromNodeList(nodes);
			this.unHoverNodes(indices);
		},

		getNodesByTagName : function(tagName) {
			var nodes = window.dictionary.termsByTagName(tagName);
			return nodes;
		},

		getIndexListFromNodeList : function(nodeList) {
			var indices = [];
			for (var i = 0; i < nodeList.length; i++) {
				indices.push(nodeList[i].index);
			}

			return indices;
		},

		selectNode : function(node, d) {
			var selection = d3.select(node);

			if (!d) {
				d = selection.datum();
			}

			var _this = this;

			d3.selectAll('.node').classed('selected', false);

			selection
				.classed('selected', true)
				.attr('r', 10);

			// Clear the current selection
			d3.selectAll('.node')
				.each(function(d,i) {
					_this.unHoverNode(this, d);
				});

			d3.select('.node-label[data-index="' + d.index + '"]')
				.style('opacity', 1)

			reader.render(dictionary.terms[d.index]);
		},

		highlightTag : function(tagName) {
			if (tagName) {
				var i = dictionary.tags.indexOf(tagName);
				var tags = d3.select("#tag-list").selectAll(".tag[data-tag-index='"+i+"']");
				tags.classed("highlight", true);
			}
		},

		unHighlightTags : function() {
			d3.select("#tag-list").selectAll(".tag.highlight").classed("highlight", false);
		},

		highlightTags : function(tagList) {
			this.unHighlightTags();
			for (var i = 0; i < tagList.length; ++i) {
				this.highlightTag(tagList[i]);
			}
		},

		categoricalGravity : false,

		tagGravity : false,

		initialize : function() {
			var _this = this;
			window.addEventListener('keyup', function(e) {
				if (!reader.inputIsFocused) {
					if (e.keyCode == 67 && !_this.categoricalGravity) {
						_this.categoricalGravity = true;
						_this.tagGravity = false;
						_this.renderTagList(false);
						force.resume();
						tagFociDistributor.resume();
						categoryFociDistributor.resume();
					} else if (e.keyCode == 84 && !_this.tagGravity) {
						_this.categoricalGravity = false;
						_this.tagGravity = true;
						_this.renderTagList(true);
						force.resume();
						tagFociDistributor.resume();
						categoryFociDistributor.resume();
					} else if (e.keyCode == 76) {
						_this.categoricalGravity = false;
						_this.tagGravity = false;
						_this.renderTagList(false);
						force.resume();
						tagFociDistributor.resume();
						categoryFociDistributor.resume();
					}
				}
			});
		}

	}

} 

var dc = new DictionaryController(window.dictionary);