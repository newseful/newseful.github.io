var ChartBehaviorManager = function() {

	return {

		hoverNode : function(node, d) {
			var selection = d3.select(node);

			if (!d) {
				d = selection.datum();
			}

			selection
				.transition()
				.ease('elastic')
				.attr('r',10);

			d3.select('.node-label[data-index="' + d.index + '"]')
				.style('opacity', 1)
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
						.ease('elastic')
						.attr('r',5);

					d3.select('.node-label[data-index="' + d.index + '"]')
						.style('opacity', 0)
				}
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
		}

	}

} 

var behaviors =  new ChartBehaviorManager();
behaviors.getNodesByTagName("ethics");