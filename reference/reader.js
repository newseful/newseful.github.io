var Reader = function(dict) {
	return {

		container : document.querySelector("#terms"),

		constructSimpleTerm : function(term) {
			var tmp = document.querySelector(".simple-term").cloneNode(true);
			tmp.querySelector(".term-title").innerHTML = term.term;
			tmp.querySelector(".term-body").innerHTML = term.definition;
			tmp.classList.remove("template");

			var tagList = tmp.querySelector(".term-tags");
			var tag = tagList.querySelector(".term-tag");

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

			return tmp;
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
				tmpli.setAttribute('data-index', i);
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

		},

		init : function() {
			this.render();
		}

	}
}

var reader = new Reader(window.dictionary.terms);
reader.init();