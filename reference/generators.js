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

// Generate tag index + dictionary index, sort tag index
for (x in dictionary.terms) {
	for (t in dictionary.terms[x].tags) {
		tag = dictionary.terms[x].tags[t]
		if (dictionary.tags.indexOf(dictionary.terms[x].tags[t]) == -1) dictionary.tags.push(dictionary.terms[x].tags[t]);
	}

	dictionary.index.push(dictionary.terms[x].term);
	dictionary.terms[x].tags.sort();
}

// Generate connection stats
for (x in dictionary.terms) {

	var t = dictionary.terms[x];
	var def = t.definition;

	for (var i = 0; i < dictionary.index.length; i++) {
		// Don't link to self
		if (i != parseInt(x)) {

			// Get term name for i from the index
			var index = dictionary.index[i];
			// Match it against dictionary term x definition
			var indexDoesHaveMatchInDefinition = def.match(new RegExp(index, "i"));

			// Connect if matched, add connection to dictionary.terms[x].connections
			// And to separate links array formatted for d3.layout.force
			if (indexDoesHaveMatchInDefinition) {
				t.connections.push({index : i, name : index});
				dictionary.links.push({
					source : parseInt(x),
					target : i
				});
			}
		}
	}
}

// Generate calendar.cal, list of week objects with all associated
// events bundled with format
// {
// 		week : (weekname string),
//		tasks : {
//			wip : [ int array ],
// 			due : [ int array ]
// 		}
// }
// 
// 
for (week in calendar.weeks) {

	var w = calendar.weeks[week],
			data = {},
			weekIndex = parseInt(week);

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