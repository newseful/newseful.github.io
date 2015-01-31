var ChartBehaviorManager = function() {

	return {

		hoverNode : function(node, d, highlightTags) {

			var selection = d3.select(node);

			if (!d) {
				d = selection.datum();
			}

			selection
				.transition()
				.duration(350)
				.ease('elastic')
				.attr('r',10);

			d3.select('.node-label[data-index="' + d.index + '"]')
				.style('opacity', 1)

			if (highlightTags) { this.highlightTags(d.tags) };
		},

		unHoverNode : function(node, d) {
			if (node) {
				var isCurrentlySelected = false;

				var selection = d3.select(node).filter(function(d,i) {
					isCurrentlySelected = this.classList.contains("selected");
					return !isCurrentlySelected;
				});

				if (!isCurrentlySelected) {

					if (!d) {
						d = selection.datum();
					}

					selection
						.transition()
						.duration(350)
						.ease('elastic')
						.attr('r',5);

					d3.select('.node-label[data-index="' + d.index + '"]')
						.style('opacity', 0)
				}
				this.unHighlightTags();
			}
		},

		hoverNodes : function(indexList) {
			for (var i = 0; i < indexList.length; i++) {
				this.hoverNode('.node[data-index="' + indexList[i] + '"]');
			}
		},

		unHoverNodes : function(indexList) {
			for (var i = 0; i < indexList.length; i++) {
				this.unHoverNode('.node[data-index="' + indexList[i] + '"]');
			}
		},

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

		renderTagList : function(b) {
			if (b) {
				var _this = this;

				var s = d3.selectAll("body").append("div").attr("id", "tag-list").append("ul")

				var li = s.selectAll("li")
					.data(tagData)
					.enter()
						.append("li")
						.classed("tag", true)
						.attr("data-tag-index", function(d, i) { return i })
						.text(function(d) { return d.tag });

				li.on("mouseenter", function(e) {
					var d = this.innerHTML
					_this.hoverNodesForTag(d);
				});

				li.on("mouseout", function(e) {
					var d = this.datum
					_this.unHoverNodesForTag(d);
				})

			} else {
				d3.selectAll("#tag-list").remove()
			}
		},

		categoricalGravity : false,

		tagGravity : false,

		initialize : function() {
			var _this = this;
			window.addEventListener('keyup', function(e) {
				if (!reader.inputIsFocused) {
					if (e.keyCode == 67) {
						_this.categoricalGravity = true;
						_this.tagGravity = false;
						_this.renderTagList(false);
						force.resume();
						tagFociDistributor.resume();
						categoryFociDistributor.resume();
					} else if (e.keyCode == 84) {
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

var behaviors =  new ChartBehaviorManager();
behaviors.initialize();