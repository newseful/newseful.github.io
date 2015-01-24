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

			tip.style({
				'left' : d.x + 20 + 'px',
				'top' : d.y - 20 + 'px',
				'opacity' : 1
			});

			tipTitle.text(d.term);
		},

		unHoverNode : function(node, d) {
			var selection = d3.select(node);

			if (!d) {
				d = selection.datum();
			}

			selection
				.transition()
				.ease('elastic')
				.attr('r',5);

			tip.style({
				'top' : 0,
				'left' : 0,
				'opacity' : 0
			});
		},

		selectNode : function(node, d) {
			var selection = d3.select(node);

			if (!d) {
				d = selection.datum();
			}

			d3.selectAll('.node')
				.classed('selected', false);

			selection
				.classed('selected', true);

			reader.render(dictionary.terms[d.index]);
		}

	}

} 

var behaviors =  new ChartBehaviorManager();