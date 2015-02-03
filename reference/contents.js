// Dictionary object for containing data
window.dictionary = {};

// Possible data categories index
dictionary.categories = [
	"Term",
	"Precedent",
	"Resource",
	"Relevant Entity",
	"Event"
];

dictionary.palette = {
	blue : "#256EF5",
	red : "#F55925",
	yellow : "#CFB521",
	orange : "#44C968",
	green : "#3EB571"
}

// Path to media resources for simplified "media" property in term
dictionary.mediaPath = "media/";

// Empty tag array to fill later in generators.js
dictionary.tags = [];

// Empty index array to fill later in generators.js for
// faster searching (can use array.indexOf instead of looping)
// through dictionary.terms.term properties
dictionary.index = []

// Empty array to fill with generated links between term
// definitions and term names in generators.js
dictionary.links = [];

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
		tags: ["media"],
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
		definition: "The perception of objective reality from multiple points of view at the same moment.",
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
		tags: ["design", "technology"],
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
		cat: 2,
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
		tags: ["media", "design"],
		connections: []
	},
	{
		term: "breaking news (website)",
		definition: "Digital platform focusing on breaking news aggregation. Reddit-style lists of current events curated by staff editors. Weird full-screen map background.",
		cat: 1,
		media: ["breaking-news-01.jpg", "breaking-news-02.jpg", "breaking-news-03.jpg"],
		owner: 0,
		tags: ["media", "design",],
		connections: []
	},
	{
		term: "the upshot",
		definition: "New York Times blog devoted to visualizing news.",
		cat: 1,
		media: ["upshot-01.jpg", "upshot-02.jpg"],
		owner: 0,
		tags: ["media", "design"],
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
		cat: 3,
		media: [],
		owner: 0,
		tags: ["social", "outlet"],
		connections: []
	},
	{
		term: "facebook",
		definition: "Emotional responses from sheltered network. Limited relevance.",
		cat: 3,
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
		tags: ["media", "social", "technology"],
		connections: []
	},
	{
		term: "trusted sources",
		definition: "Professional journalism from established and reliable news sources.",
		cat: 0,
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
	{
		term: "bloomberg",
		definition: "Business news etc. Recent redesign featuring persistent live video feed in sticky header. Visually beautiful, still usable.",
		cat: 1,
		media: ["bloomberg-01.jpg", "bloomberg-02.jpg"],
		owner: 0,
		tags: ["media", "outlet"],
		connections: []
	},
	{
		term: "speculation",
		definition: "Educated guesses about the facts of a story made without verification.",
		cat: 0,
		media: ["speculation.jpg"],
		owner: 0,
		tags: ["media", "ethics"],
		connections: []
	},
	{
		term: "visualization",
		definition: "The practice of using graphical formats to present structured information in such a way that it is more easily understood than a simple verbal explanation.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["design", "technology"],
		connections: []
	},
	{
		term: "public opinion",
		definition: "The reaction to an event by those not directly involved in the media or the story.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["power structures"],
		connections: []
	},
	{
		term: "aggregation",
		definition: "The practice of collecting, sorting, and presenting data from multiple sources in a single context.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["design", "media", "technology"],
		connections: []
	},
	{
		term: "stream",
		definition: "Live, on-location footage of events unfolding in real time, or major figures offering commentary or updates in such a manner that their commentary or updates become part of the story.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["media", "design", "technology"],
		connections: []
	},
	{
		term: "bloomberg visual data",
		definition: "Bloomberg's data visualization section.",
		cat: 1,
		media: ["bloomberg-viz-01.jpg", "bloomberg-viz-02.jpg", "bloomberg-viz-03.jpg"],
		owner: 0,
		tags: ["media", "outlet"],
		connections: []
	},
	{
		term: "outlet",
		definition: "A channel through which news is distributed.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["media"],
		connections: []
	},
	{
		term: "the toolmaker's guide",
		definition: "Talk by Mike Bostock (NYT Data Visualization) on creating useful tools.",
		cat: 2,
		media: ["bostock-01.jpg"],
		owner: 0,
		tags: ["media", "design"],
		connections: []
	},
	{
		term: "data",
		definition: "Quantitative information.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["technology"],
		connections: []
	},
	{
		term: "nYT now",
		definition: "New York Times app for current events coverage. Pushes notifications for developing stories.",
		cat: 1,
		media: ["nytnow-01.jpg", "nytnow-02.jpg", "nytnow-03.jpg"],
		owner: 0,
		tags: ["media", "design", "outlet"],
		connections: []
	},
	{
		term: "wikipedia",
		definition: "Crowd-sourced and maintained encyclopedia. Good example of a self-correcting system",
		cat: 1,
		media: ["wikipedia-01.jpg", "wikipedia-02.jpg"],
		owner: 0,
		tags: ["media"],
		connections: []
	},
	{
		term: "self-correcting system",
		definition: "An entity which is capable of correcting its errors without top-down maintenance.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["technology"],
		connections: []
	},
	{
		term: "ferguson",
		definition: "Officer-involved shooting of Michael Brown (age 18) sparked outrage across the country.",
		cat: 4,
		media: [],
		owner: 0,
		tags: ["ethics","media","social"],
		connections: []
	},
	{
		term: "benghazi",
		definition: "Terrorist attacks against US assets in Libya lead to questions about security adequacy.",
		cat: 4,
		media: [],
		owner: 0,
		tags: ["ethics","media","social"],
		connections: []
	},
	{
		term: "the interview",
		definition: "Retaliatory cyber-attack against Sony for releasing their film 'The Interview'.",
		cat: 4,
		media: [],
		owner: 0,
		tags: ["ethics","media","social"],
		connections: []
	},
	{
		term: "charlie hebdo",
		definition: "Terrorist attack on French satire publication elicits widespread sympathy in the media, also exacerbates anti-Islamic sentiment on social media.",
		cat: 4,
		media: [],
		owner: 0,
		tags: ["ethics","media","social"],
		connections: []
	},
	{
		term: "snowden leaks",
		definition: "Ex-NSA employee Edward Snowden leaks vital information on top-secret PRISM program and other clandestine government monitoring operations.",
		cat: 4,
		media: [],
		owner: 0,
		tags: ["ethics","media","social", "technology"],
		connections: []
	},
	{
		term: "emotional contagion study",
		definition: "Old paper published by Facebook researcher reveals controversial experiments in effecting user happiness.",
		cat: 4,
		media: [],
		owner: 0,
		tags: ["ethics","media","social","technology"],
		connections: []
	},
	{
		term: "ray rice abuse case",
		definition: "Released video evidence shows NFL had graphic knowledge of Ravens player Rice's domestic abuse, went light on punishment, prompting social media outcry.",
		cat: 4,
		media: [],
		owner: 0,
		tags: ["ethics","media","social",],
		connections: []
	},
	{
		term: "the visual display of quantitative information",
		definition: "Book by Edward Tufte on data visualization. Excellent for advocacy of clarity and simplicity.",
		cat: 2,
		media: [],
		owner: 0,
		tags: ["ethics","design"],
		connections: []
	},
	{
		term: "broadcast",
		definition: "to communicate instantaneously across great distance to large numbers.",
		cat: 0,
		media: [],
		owner: 0,
		tags: ["media","technology"],
		connections: []
	},
	{
		term: "three ways to redesign breaking news",
		definition: "Brief Fast Company article on possible improvements to breaking news design.",
		cat: 2,
		media: [],
		owner: 0,
		tags: ["media","technology","design"],
		connections: []
	},
	{
		term: "joshua topolsky",
		definition: "Digital editor. Responsible for current Bloomberg redesign. Previously at The Verge.",
		cat: 3,
		media: ["topolsky.jpg"],
		owner: 0,
		tags: ["media","technology","design"],
		connections: []
	},
	{
		term: "vox media",
		definition: "Consortium of digital news publications exploring the evolution of editorial design for the screen.",
		cat: 3,
		media: ["vox-media.jpg"],
		owner: 0,
		tags: ["media","technology"],
		connections: []
	},
	{
		term: "vox.com",
		definition: "Digital news site trying to take advantage of its digital context in new ways.",
		cat: 1,
		media: ["vox-01.jpg", "vox-02.jpg", "vox-03.jpg"],
		owner: 0,
		tags: ["media","technology","outlet"],
		connections: []
	},
	{
		term: "quartz",
		definition: "Independent digital news company. Strong, appropriate data visualizations.",
		cat: 1,
		media: imageMap(3, "qz"),
		owner: 0,
		tags: ["media","technology","outlet"],
		connections: []
	},
	{
		term: "legit",
		definition: "Hackathon project to allow reporters/news media personnel to verify tweets geotagged around a breaking news event.",
		cat: 1,
		media: [],
		owner: 0,
		tags: ["media","technology"],
		connections: []
	},
	{
		term: "amber alert system",
		definition: "Existing example of a (somewhat abbrasive) implementation of breaking news updates on mobile device.",
		cat: 1,
		media: [],
		owner: 0,
		tags: ["technology"],
		connections: []
	},
	{
		term: "cNN",
		definition: "24-hour news network and web news source. Notable for lack of print edition.",
		cat: 3,
		media: [],
		owner: 0,
		tags: ["media","outlet"],
		connections: []
	},
	{
		term: "new york times",
		definition: "Gold standard of the newspaper world. Notable also for interactive features, see The Upshot.",
		cat: 3,
		media: [],
		owner: 0,
		tags: ["media","outlet"],
		connections: []
	},
	{
		term: "uSA today",
		definition: "Mostly digital popular news source. Not known for ethical rigor.",
		cat: 3,
		media: [],
		owner: 0,
		tags: ["media","outlet"],
		connections: []
	},
	{
		term: "bBC",
		definition: "British broadcasting corporation, digital presence is notable for its consistency across the exceptionally wide range of content.",
		cat: 3,
		media: [],
		owner: 0,
		tags: ["media","outlet"],
		connections: []
	},
	{
		term: "huffington post",
		definition: "Early example of an entirely digital news source. Reputation was at one point substandard but has recently improved.",
		cat: 3,
		media: [],
		owner: 0,
		tags: ["media","outlet"],
		connections: []
	},
	{
		term: "the atlantic",
		definition: "Classic print magazine. Digital presence has become relevant to breaking news with powerful pieces published by staff writers such as Ta-Nehisi Coates.",
		cat: 3,
		media: [],
		owner: 0,
		tags: ["media","outlet"],
		connections: []
	},
	{
		term: "al-jazeera",
		definition: "Qatari broadcaster. Direct audience in US is minimal, but a lot of their stories are picked up by domestic outlets.",
		cat: 3,
		media: [],
		owner: 0,
		tags: ["media","outlet"],
		connections: []
	},
	{
		term: "reuters",
		definition: "British news agency which has few direct avenues to broadcast, but many of their stories are picked up by domestic outlets.",
		cat: 3,
		media: [],
		owner: 0,
		tags: ["media","outlet"],
		connections: []
	},
	{
		term: "associated press",
		definition: "American nonprofit news agency. Few direct publishing platforms, but many stories carried by domestic outlets.",
		cat: 3,
		media: [],
		owner: 0,
		tags: ["media","outlet"],
		connections: []
	},
	{
		term: "timeline.js",
		definition: "Open source tool to easily create interactive timelines. Seen across digital media in wake of ferguson, snowden leaks, etc.",
		cat: 1,
		media: imageMap(2, "timeline"),
		owner: 0,
		tags: ["design","technology"],
		connections: []
	},
	{
		term: "storymap.js",
		definition: "Open source tool to easily create interactive map stories.",
		cat: 1,
		media: imageMap(2, "storymap"),
		owner: 0,
		tags: ["design","technology"],
		connections: []
	},
	{
		term: "knight lab",
		definition: "Northwestern University organization responsible for timeline.js and storymap.js, two tools that make creating interactive stories more accessible to journalists.",
		cat: 3,
		media: [],
		owner: 0,
		tags: ["technology"],
		connections: []
	},
];

// Schedule object
window.calendar = {};

// Create an empty array to hold a list of objects
// that attaches each week to all of its events
calendar.cal = [];

// All the week names for this semester
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

// All events and their corresponding weeks
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