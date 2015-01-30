window.dictionary = {};

dictionary.categories = [
	"Term",
	"Outlet",
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

dictionary.mediaPath = "media/"

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
	},
	{
		term: "guardian next",
		definition: "Recent iteration of the Guardian's website. Touted mostly as responsive update, but breaking news stories have received a facelift as well.",
		cat: 1,
		media: ["guardian-01.jpg", "guardian-02.jpg"],
		owner: 0,
		tags: ["media", "design", "precedent"],
		connections: []
	},
	{
		term: "breaking news (website)",
		definition: "Digital platform focusing on breaking news aggregation. Reddit-style lists of current events curated by staff editors. Weird full-screen map background.",
		cat: 1,
		media: ["breaking-news-01.jpg", "breaking-news-02.jpg", "breaking-news-03.jpg"],
		owner: 0,
		tags: ["media", "design", "precedent"],
		connections: []
	},
	{
		term: "the upshot",
		definition: "New York Times blog devoted to visualizing news.",
		cat: 1,
		media: ["upshot-01.jpg", "upshot-02.jpg"],
		owner: 0,
		tags: ["media", "design", "precedent"],
		connections: []
	},
	{
		term: "24-hour News Network",
		definition: "TV news networks which broadcast 24 hours a day. This demanding schedule leads to a high demand for content, which leads to speculation.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["media", "outlet"],
		connections: []
	},
	{
		term: "twitter",
		definition: "Emotional and measured responses from global network. Mixed relevance and reliability.",
		cat: 1,
		media: [],
		owner: 0,
		tags: ["social", "outlet"],
		connections: []
	},
	{
		term: "facebook",
		definition: "Emotional responses from sheltered network. Limited relevance.",
		cat: 1,
		media: [],
		owner: 0,
		tags: ["social", "outlet"],
		connections: []
	},
	{
		term: "clickbait journalism",
		definition: "Stories shared via social media written to drive advertising revenue rather than to inform about current events.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["media", "social"],
		connections: []
	},
	{
		term: "trusted sources",
		definition: "Professional journalism from established and reliable news sources.",
		cat: 1,
		media: [],
		owner: 0,
		tags: ["outlet", "media"],
		connections: []
	},
	{
		term: "journalism",
		definition: "The practice of collecting facts and reporting them to the general public.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["media"],
		connections: []
	},
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

window.calendar = {};

calendar.weeks = [
	"January 20",
	"January 20 \u2013 January 27",
	"January 27 \u2013 February 3",
	"February 3 \u2013 February 10",
	"February 10 \u2013 February 17",
	"February 17 \u2013 February 24",
	"February 24 \u2013 March 3",
	"March 3 \u2013 March 10",
	"March 10 \u2013 March 17",
	"March 17 \u2013 March 24",
	"March 24 \u2013 March 31",
	"March 31 \u2013 April 7",
	"April 7 \u2013 April 14",
	"April 14 \u2013 April 21",
	"April 21 \u2013 April 28",
	"April 28 \u2013 May 5",
]

calendar.events = [
	{
		name : "Design dictionary",
		weeks : {
			wip : [0],
			due : []
		}
	},
	{
		name : "Build dictionary",
		weeks : {
			wip : [0,1,2],
			due : [3]
		}
	},
	{
		name : "Write final project description",
		weeks : {
			wip : [],
			due : [2]
		}
	},
	{
		name : "Write final project schedule",
		weeks : {
			wip : [],
			due : [2]
		}
	},
	{
		name : "Research 3\u20135 major news events from the past two years for use in prototype",
		weeks : {
			wip : [],
			due : [2]
		}
	},
	{
		name : "Write case studies on major news events researched last week",
		weeks : {
			wip : [],
			due : [3]
		}
	},
	{
		name : "Decide final name",
		weeks : {
			wip : [],
			due : [4]
		}
	},
	{
		name : "Design branding ideas",
		weeks : {
			wip : [],
			due : [4]
		}
	},
	{
		name : "Design initial ideas for final form",
		weeks : {
			wip : [5,6],
			due : [7]
		}
	},
	{
		name : "Build prototypes if it helps",
		weeks : {
			wip : [5,6],
			due : [7]
		}
	},
	{
		name : "Design panel presentation",
		weeks : {
			wip : [],
			due : [7]
		}
	},
	{
		name : "Consider options before beginning final design process",
		weeks : {
			wip : [8],
			due : []
		}
	},
	{
		name : "Decide final form",
		weeks : {
			wip : [],
			due : [9]
		}
	},
	{
		name : "Design product architecture",
		weeks : {
			wip : [],
			due : [9]
		}
	},
	{
		name : "Research technical requirements",
		weeks : {
			wip : [],
			due : [9]
		}
	},
	{
		name : "Design final form",
		weeks : {
			wip : [10,11,12],
			due : [13]
		}
	},
	{
		name : "Build final form",
		weeks : {
			wip : [10,11,12],
			due : [13]
		}
	},
	{
		name : "Write project abstract",
		weeks : {
			wip : [],
			due : [11]
		}
	},
	{
		name : "Write exhibition proposal",
		weeks : {
			wip : [11,12],
			due : [13]
		}
	},
	{
		name : "Produce exhibition stuff",
		weeks : {
			wip : [],
			due : [14]
		}
	},
	{
		name : "Tweak final form",
		weeks : {
			wip : [14],
			due : [15]
		}
	},
	{
		name : "Install exhibition",
		weeks : {
			wip : [],
			due : [15]
		}
	},
]