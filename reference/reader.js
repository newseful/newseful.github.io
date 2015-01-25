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

		constructTermList : function() {
			var tmpContainer = document.querySelector(".full-term-list").cloneNode(true);
			var list = tmpContainer.querySelector("ul");
			var li = document.querySelector(".term-list-item");

			for (var i = 0; i < this.dictionary.length; i++) {
				var tmpli = li.cloneNode("true");
				tmpli.innerHTML = this.dictionary[i].term;
				tmpli.classList.remove("template");
				tmpli.setAttribute('data-index', i);

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

			tmpContainer.classList.remove("template");

			return tmpContainer;
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

		}

	}
}

var reader = new Reader(window.dictionary.terms);
reader.render();