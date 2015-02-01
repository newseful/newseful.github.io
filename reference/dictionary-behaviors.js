// Get terms by tag name
// Returns array of term objects
window.dictionary.termsByTagName = function(tagName) {
	var terms = [];

	for (x in this.terms) {
		var isTagged = false;
		for (var i = 0; i < this.terms[x].tags.length; i++) {
			if (this.terms[x].tags[i].match(tagName)) {
				isTagged = true;
				break;
			}
		}

		if (isTagged) {
			terms.push(this.terms[x].term);
		}
	}
	return terms;
}

window.dictionary.search = function(term) {
	var termsReturned = [];

	for (x in this.terms) {
		if (this.terms[x].term.match( new RegExp(term, "gi") ) ) {
			termsReturned.push(this.terms[x]);
		}
	}

	return termsReturned;
}