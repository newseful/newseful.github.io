var Reader = function(dict) {
	return {

		container : document.querySelector("#terms"),

		constructSimpleTerm : function(term) {
			var tmp = document.querySelector(".simple-term").cloneNode(true);
			tmp.querySelector(".term-title").innerHTML = term.term;
			tmp.querySelector(".term-body").innerHTML = this.highlight(term.definition, term.connections);
			tmp.classList.remove("template");

			var tagList = tmp.querySelector(".term-tags");
			var tag = tagList.querySelector(".tag");

			var media = tmp.querySelector(".term-media");

			tmp.querySelector(".term-category").innerHTML = dictionary.categories[term.cat];
			tmp.querySelector(".term-category").classList.add("category-" + term.cat);

			if (term.tags.length) {
				for ( var i = 0; i < term.tags.length; i++ ) {
					var curTag = i ? tag.cloneNode(true) : tag;
					curTag.innerHTML = term.tags[i];
					curTag.setAttribute('data-tag-name', term.tags[i]);
					if (i) {
						tagList.appendChild(curTag);
					}

					curTag.addEventListener("mouseenter", function() {
						behaviors.hoverNodesForTag(this.dataset.tagName);
					});

					curTag.addEventListener("mouseout", function() {
						behaviors.unHoverNodesForTag(this.dataset.tagName);
					})
				}
			} else {
				while (tagList.hasChildNodes()) {
					tagList.removeChild(tagList.lastChild);
				}
			}

			if (term.media.length) {
				for (var i = 0; i < term.media.length; i++) {
					var img = document.createElement("img");
					img.setAttribute("src", dictionary.mediaPath + term.media[i]);

					var _this = this;

					img.addEventListener("click", function() {
						_this.expandImg(this);
					});

					media.appendChild(img);
				}
			} else {
				media.parentNode.removeChild(media);
			}

			this.registerDescriptionListeners(tmp);

			return tmp;
		},

		// Returns parsed term description with connections marked up
		// Expects term def + term connection list (array of index, name objects)
		highlight : function(t, connections) {
			if (connections.length) { 
				var html = t;
				for (var i = 0; i < connections.length; i++) {
					var name = connections[i].name;
					var exp = new RegExp(name, 'i');
					if (exp.exec(t)) {
						var res = exp.exec(t);
						
						var openingTag = "<span class='term-inline' data-index='" + connections[i].index + "'>";
						var closingTag = "</span>";

						var endPoint = res.index + name.length;

						while(t.charAt(endPoint).match(/[a-zA-Z]/)) {
							endPoint++;
						}

						t = t.insert(endPoint, closingTag);
						t = t.insert(res.index, openingTag);
					}
				}
			}

			return t;
		},

		registerDescriptionListeners : function(element) {
			if (element.querySelectorAll(".term-inline")) {
				terms = element.querySelectorAll(".term-inline");

				for (var i = 0; i < terms.length; i++) {
					var t = terms[i];
					t.addEventListener("mouseenter", function() {
						var i = this.dataset.index;
						var node = ".node[data-index='" + i + "']";
						behaviors.hoverNode(node);
					});
					t.addEventListener("mouseout", function() {
						var i = this.dataset.index;
						var node = ".node[data-index='" + i + "']";
						behaviors.unHoverNode(node);
					});
					t.addEventListener("click", function() {
						var i = this.dataset.index;
						var node = ".node[data-index='" + i + "']";
						behaviors.selectNode(node);
					});
				}
			}
		},

		// Returns a bunch of lis
		renderTermListContents : function(termList) {
			var list = document.createElement("ul");
			var li = document.querySelector(".term-list-item");

			var terms = termList ? termList : this.dictionary;

			for (var i = 0; i < terms.length; i++) {
				var tmpli = li.cloneNode("true");
				tmpli.innerHTML = terms[i].term;
				tmpli.classList.remove("template");
				tmpli.setAttribute('data-index', terms[i].index);
				tmpli.classList.add('category-' + terms[i].cat);

				tmpli.addEventListener("mouseenter", function() {
					var node = ".node[data-index='" + this.dataset.index + "']";
					behaviors.hoverNode(node);
				});

				tmpli.addEventListener("mouseout", function() {
					var node = ".node[data-index='" + this.dataset.index + "']";
					behaviors.unHoverNode(node);
				});

				tmpli.addEventListener("click", function() {
					var node = ".node[data-index='" + this.dataset.index + "']";
					behaviors.selectNode(node);
				})

				list.appendChild(tmpli);
			}

			return list;
		},

		inputIsFocused : false,

		constructTermList : function(termList) {
			var tmpContainer = document.querySelector(".full-term-list").cloneNode(true);
			
			tmpContainer.appendChild(this.renderTermListContents(termList));

			var _this = this;

			tmpContainer.querySelector(".search-terms").addEventListener("keyup", function() {
				var terms = this.value;

				_this.clearTermList();

				if (terms) {
					_this.updateTermList(dictionary.search(terms));
				} else {
					_this.updateTermList();
				}
			});

			tmpContainer.querySelector(".search-terms").addEventListener("focus", function() {
				_this.inputIsFocused = true;
			});

			tmpContainer.querySelector(".search-terms").addEventListener("blur", function() {
				_this.inputIsFocused = false;
			});

			tmpContainer.classList.remove("template");

			return tmpContainer;
		},

		updateTermList : function(termList) {
			var container = document.querySelector("#terms .full-term-list");
			container.appendChild(this.renderTermListContents(termList));
			
		},

		clearTermList : function() {
			var container = document.querySelector("#terms .full-term-list ul");

			while (container.hasChildNodes()) {
				container.removeChild(container.lastChild);
			}

			container.parentNode.removeChild(container);
		},

		dictionary : dict,

		// render term into reader section
		// @term expects object containing term object of format:
		// {
	  // term: "news",
		// definition: "The medium by which we are informed of current events.",
		// cat: 0,
		// media: [],
		// owner: 0,
		// tags: [],
		// connections: []
		// }
		render : function(term) {
			// Empty contents
			while (this.container.hasChildNodes()) {
				this.container.removeChild(this.container.lastChild);
			}

			// If we received term object display simple term template
			// If we didn't, put the full list of terms in it
			if (term) {
				this.container.appendChild(this.constructSimpleTerm(term));
				this.container.appendChild(document.createElement("hr"));
				this.container.appendChild(this.constructTermList());
			} else {
				this.container.appendChild(this.constructTermList());
			}

			// Reset scroll position
			this.container.scrollTop = 0;

		},

		expandImg : function(img) {
			var startPos = img.getBoundingClientRect();
			var expander = img.cloneNode(true);
			var bg = document.createElement("div");

			var vertical = (function() { return img.height > img.width })();
			var orientation = vertical ? "vertical" : "horizontal";

			var overlay = document.createElement("div");
			overlay.classList.add("overlay");
			var container = document.querySelector("body")

			img.classList.add("expanded");
			img.classList.add(orientation);

			expander.classList.add("expander");
			expander.style.top = Converter.pxToVh(startPos.top) + "vh";
			expander.style.left = Converter.pxToVw(startPos.left) + "vw";
			if (vertical) {
				expander.style.height = Converter.pxToVh(startPos.height) + "%";
				expander.style.width = "auto"
			} else {
				expander.style.width = Converter.pxToVw(startPos.width) + "%";
				expander.style.height = "auto"
			}
			expander.style.transform = "translate(0%,0%)";
			expander.style.webkitTransform = "translate(0%,0%)";

			bg.style.opacity = "0.8";
			bg.classList.add("bg");

			overlay.appendChild(bg);
			overlay.appendChild(expander);
			container.appendChild(overlay);

			window.setTimeout(function() {
				expander.style.top = "50vh";
				expander.style.left = "50vw";
				expander.style.transform = "translate(-50%, -50%)";
				expander.style.webkitTransform = "translate(-50%, -50%)";
				if (vertical) {
					expander.style.height = "90%";
				} else {
					expander.style.width = "75%";
				}
			}, 10);

			overlay.addEventListener("click", function() {
				bg.style.opacity = "0";
				expander.style.top = Converter.pxToVh(startPos.top) + "vh";
				expander.style.left = Converter.pxToVw(startPos.left) + "vw";
				if (vertical) {
					expander.style.height = Converter.pxToVh(startPos.height) + "%";
				} else {
					expander.style.width = Converter.pxToVw(startPos.width) + "%";
				}
				expander.style.transform = "translate(0%,0%)";
				expander.style.webkitTransform = "translate(0%,0%)"

				window.setTimeout(function() {
					overlay.parentNode.removeChild(overlay);
					document.querySelector(".expanded").classList.remove("expanded");
				}, 250);
			}); 
		},

		init : function() {
			this.render();
		}

	}
}

var reader = new Reader(window.dictionary.terms);
reader.init();