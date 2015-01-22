// Generate index
for (x in dictionary.terms) {
	dictionary.index.push(dictionary.terms[x].term);
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