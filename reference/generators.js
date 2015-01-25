// Alphabetize dictionary
dictionary.terms.sort(function(a, b) {
	if (a.term > b.term) {
		return 1;
	}

	if (b.term > a.term) {
		return -1;
	}

	return 0;
});



// Generate index + sort tags
for (x in dictionary.terms) {
	dictionary.index.push(dictionary.terms[x].term);
	dictionary.terms[x].tags.sort();
}

dictionary.links = [];

// Generate connection stats
for (x in dictionary.terms) {
	var t = dictionary.terms[x];
	var def = t.definition;
	for (var i = 0; i < dictionary.index.length; i++) {
		var index = dictionary.index[i];
		var indexDoesHaveMatchInDefinition = def.match(new RegExp(index, "i"));
		if (indexDoesHaveMatchInDefinition) {
			t.connections.push({index : i, name : index});
			dictionary.links.push({
				source : parseInt(x),
				target : i
			})
		}
	}
}

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
			terms.push(this.terms[x]);
		}

	}

	return terms;
}

// // Generate links object for d3 layout

// for (x in dictionary.terms) {
// 	var term = dictionary.terms[x];
// 	if (term.connections.length > 0) {
// 		for (var i = 0; i < term.connections.length; i++) {
// 			var connection = term.connections[i];
// 			dictionary.links.push({
// 				source : parseInt(x),
// 				target : i
// 			});
// 		}
// 	}
// }