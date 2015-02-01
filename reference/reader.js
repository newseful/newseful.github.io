var Reader = function(dict, controller) {
	r = {

		container : document.querySelector("#terms"),
		controller : controller,
		inputIsFocused : false,
		dictionary : dict,

		constructSimpleTerm : function(term) {
			var tagElements = [],
					templateClone = document.querySelector(".simple-term").cloneNode(true),
					tagList = templateClone.querySelector(".term-tags"),
					tag = tagList.querySelector(".tag"),
					media = templateClone.querySelector(".term-media");


			templateClone.querySelector(".term-title").innerHTML = term.term;
			templateClone.querySelector(".term-body").innerHTML = this.highlight(term.definition, term.connections);
			templateClone.classList.remove("template");
			templateClone.querySelector(".term-category").innerHTML = dictionary.categories[term.cat];
			templateClone.querySelector(".term-category").classList.add("category-" + term.cat);

			if (term.tags.length > 0) {
				for ( var i = 0; i < term.tags.length; ++i ) {
					var t = i ? tag.cloneNode(true) : tag;
					t.innerHTML = term.tags[i];
					t.setAttribute('data-tag-name', term.tags[i]);
					tagElements.push(t);
					tagList.appendChild(t);
				}

				this.controller.notify('tag elements created', tagElements);

			} else {
				while (tagList.hasChildNodes()) {
					tagList.removeChild(tagList.lastChild);
				}
			}

			if (term.media.length) {
				for (var i = 0; i < term.media.length; ++i) {
					var img = document.createElement("img"),
							_this = this;
					
					img.setAttribute("src", dictionary.mediaPath + term.media[i]);

					img.addEventListener("click", function() {
						_this.expandImg(this);
					});
					media.appendChild(img);
				}
			} else {
				media.parentNode.removeChild(media);
			}

			this.registerDescriptionListeners(templateClone);
			return templateClone;
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
				var _this = this;
				var terms = element.querySelectorAll(".term-inline");

				for (var i = 0; i < terms.length; i++) {
					var t = terms[i];
					t.addEventListener("mouseenter", function() {
						var i = this.dataset.index;
						_this.controller.notify('hover term', i);
					});
					t.addEventListener("mouseout", function() {
						var i = this.dataset.index;
						_this.controller.notify('unhover term', i);
					});
					t.addEventListener("click", function() {
						var i = this.dataset.index;
						_this.controller.notify('select term', i);
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

				var _this = this;

				tmpli.addEventListener("mouseenter", function() {
					_this.controller.notify('hover term', this.dataset.index);
				});

				tmpli.addEventListener("mouseout", function() {
					_this.controller.notify('unhover term', this.dataset.index);
				});

				tmpli.addEventListener("click", function() {
					_this.controller.notify('select term', this.dataset.index);
				});

				list.appendChild(tmpli);
			}

			return list;
		},

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


		render : function(term) {
			// Empty contents
			while (this.container.hasChildNodes()) {
				this.container.removeChild(this.container.lastChild);
			}

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
			console.log("reader init");
			this.render();
			return this;
		}

	};

	return r.init();
}