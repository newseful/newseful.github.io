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

// Generate tag index
for (x in dictionary.terms) {
	for (t in dictionary.terms[x].tags) {
		tag = dictionary.terms[x].tags[t]
		if (dictionary.tags.indexOf(dictionary.terms[x].tags[t]) == -1) dictionary.tags.push(dictionary.terms[x].tags[t]);
	}
}

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

calendar.cal = [];

for (week in calendar.weeks) {
	var w = calendar.weeks[week];
	var data = {}
	var weekIndex = parseInt(week);

	data.week = w;
	data.tasks = {};
	data.tasks.wip = [];
	data.tasks.due = [];

	for (task in calendar.events) {
		var t = calendar.events[task];

		if (t.weeks.wip.indexOf(weekIndex) != -1) {
			data.tasks.wip.push(t.name);
		} else if ( t.weeks.due.indexOf(weekIndex) != -1) {
			data.tasks.due.push(t.name);
		}
	}

	calendar.cal.push(data);
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

window.dictionary.search = function(term) {
	var termsReturned = [];

	for (x in this.terms) {
		if (this.terms[x].term.match( new RegExp(term, "gi") ) ) {
			termsReturned.push(this.terms[x]);
		}
	}

	return termsReturned;
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