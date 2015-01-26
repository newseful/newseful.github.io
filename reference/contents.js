window.dictionary = {};

dictionary.categories = [
	"Term",
	"Visual Reference",
	"Influence",
	"Resource"
];

dictionary.palette = {
	blue : "#256EF5",
	red : "#F55925",
	yellow : "#CFB521",
	orange : "#44C968",
	green : "#3EB571"
}

dictionary.terms = [
	{
		term: "news",
		definition: "The medium by which we are informed of current events.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["media"],
		connections: [] 
	},
	{
		term: "breaking news",
		definition: "News which is reported while still developing.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["media", "time"],
		connections: [] 
	},
	{
		term: "report",
		definition: "To relay information regarding current events.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["media"],
		connections: [] 
	},
	{
		term: "current events",
		definition: "Occurrences which are worthy of some level of local, regional, national, or international attention.",
		cat: 0,
		media: [],
		owner: 0,
		tags: [],
		connections: [] 
	},
	{
		term: "bias",
		definition: "A tendency to perceive and report current events in a certain way due to subconscious tendencies and assumptions about morality, mechanics, physics, metaphysics, politics, etc. inherent to one's default mode of existence.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["ethics", "media", "cognitive science"],
		connections: [] 
	},
	{
		term: "perception",
		definition: "Reality as filtered by personal biases.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["cognitive science"],
		connections: [] 
	},
	{
		term: "subjectivity",
		definition: "The experience of living as an individual with no means of escaping one's personal biases.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["cognitive science", "ethics"],
		connections: [] 
	},
	{
		term: "objectivity",
		definition: "The hypothetical reality of a series of events. Existence questionable.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["cognitive science", "ethics"],
		connections: [] 
	},
	{
		term: "misreport",
		definition: "To accidentally or intentionally relate incorrect or inaccurate facts about a given news event.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["media", "ethics"],
		connections: [] 
	},
	{
		term: "fact",
		definition: "A point upon which the vast majority of rational subjective witnesses agree.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["ethics", "media"],
		connections: [] 
	},
	{
		term: "story",
		definition: "A coherent relation of a series of events such that a viewer or listener is able to understand causal relationships between them.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["media"],
		connections: [] 
	},
	{
		term: "accuracy",
		definition: "The measure of how closely a given point or statement agrees with fact.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["media"],
		connections: [] 
	},
	{
		term: "emotional appeal",
		definition: "A statement made with the intent of forcing agreement based upon agreed societal values.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["media", "ethics", "cognitive science"],
		connections: [] 
	},
	{
		term: "values",
		definition: "An unwritten set of rules used to weigh objects of perception for moral content and character.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["ethics", "cognitive science"],
		connections: [] 
	},
	{
		term: "morality",
		definition: "A system of right and wrong by which decisions are made and judgements reached.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["ethics", "cognitive science"],
		connections: [] 
	},
	{
		term: "verify",
		definition: "A state for a fact, event, statement, etc. which communicates that it has indeed passed a certain threshold of subjective agreement regarding its accuracy such that it can be assumed to be objectively true.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["ethics", "media"],
		connections: [] 
	},
	{
		term: "simultaneous perspective",
		definition: "the perception of objective reality from multiple points of view at the same moment.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["cognitive science"],
		connections: [] 
	},
	{
		term: "perspective",
		definition: "The unique skewing of objective facts according to an individual's particular set of biases.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["cognitive science"],
		connections: [] 
	},
	{
		term: "feed",
		definition: "A linear format by which discrete pieces of information are organized to be consumed in a particular order.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["design"],
		connections: [] 
	},
	{
		term: "article",
		definition: "An unstructured written explanation of a story.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["design"],
		connections: [] 
	},
	{
		term: "chart",
		definition: "A graphical representation of information which is specifically suited to that information.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["design"],
		connections: [] 
	},
	{
		term: "brief",
		definition: "A condensed version of an article which explains a story using a series of short, point-by-point statements.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["design", "media"],
		connections: [] 
	},
	{
		term: "institution",
		definition: "A powerful organization that has the ability to dictate societal norms.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["power structures"],
		connections: [] 
	},
	{
		term: "figure",
		definition: "An individual with far greater influence and reach than is normal.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["power structures"],
		connections: [] 
	},
	{
		term: "figurehead",
		definition: "An institution acting through an individual.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["power structures"],
		connections: [] 
	},
	{
		term: "designing news",
		definition: "Book by Francesco Franchi/Gestalten on the future of news and media industries in our digital age",
		cat: 3,
		media: [],
		owner: 0,
		tags: ["design"],
		connections: []
	}

	// Ex. of recursive explanation
	// {
	// 	term: "alpha",
	// 	definition: "beta.",
	// 	cat: 2,
	// 	media: [],
	// 	owner: 0,
	// 	tags: ["power structures"],
	// 	connections: [] 
	// },
	// {
	// 	term: "beta",
	// 	definition: "omega.",
	// 	cat: 2,
	// 	media: [],
	// 	owner: 0,
	// 	tags: ["power structures"],
	// 	connections: [] 
	// },
	// {
	// 	term: "omega",
	// 	definition: "lambda.",
	// 	cat: 2,
	// 	media: [],
	// 	owner: 0,
	// 	tags: ["power structures"],
	// 	connections: [] 
	// },
	// {
	// 	term: "lambda",
	// 	definition: "alpha.",
	// 	cat: 2,
	// 	media: [],
	// 	owner: 0,
	// 	tags: ["power structures"],
	// 	connections: [] 
	// },

];

dictionary.index = [];
dictionary.tags = [];