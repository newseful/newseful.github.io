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
						ng.updateForce('categorical')
						ng.categoricalGravity = true;
						ng.tagGravity = false;
						ng.circularLayout = false;
						ng.forceBump();
					} else if (e.keyCode == 84 && !ng.tagGravity) {
						ng.updateForce('tag')
						ng.categoricalGravity = false;
						ng.tagGravity = true;
						ng.circularLayout = false;
						ng.forceBump();
					}  else if (e.keyCode == 79 && !ng.circularLayout) {
						ng.updateForce('circular')
						ng.categoricalGravity = false;
						ng.tagGravity = false;
						ng.circularLayout = true;
						ng.forceBump();
					} else if (e.keyCode == 76) {
						ng.updateForce('link')
						ng.categoricalGravity = false;
						ng.tagGravity = false;
						ng.circularLayout = false;
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

var dc = new DictionaryController(window.dictionary);