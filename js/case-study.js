Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}

window.visualizations = window.visualizations || {};

visualizations.interviewData = [
	{
		name : 'sony',
		events : [
			{
				date : 'November 24 2014',
				text : 'Sources within Sony report that they have been hacked and blackmailed by the Guardians of Peace'
			},
			{
				date : 'Dec 15 2014',
				text : 'Seth Rogen gives an interview to Howard Stern saying that media organisations are directly profiting from stolen information.'
			},
			{
				date : 'Dec 16 2014',
				text : 'New York premiere of The Interview – scheduled for 18 December – cancelled.',
				caused : [
					{
						date : 'Dec 19 2014',
						group : 'cultural commentary'
					}
				]
			},
			{
				date : 'Dec 17 2014',
				text : 'Sony announces that it is to cancel theatrical release of The Interview.',
				caused : [
					{
						date : 'Dec 19 2014',
						group : 'cultural commentary'
					}
				]
			},
			{
				date : 'Dec 18 2014',
				text : 'Sony cancels DVD and VOD release of the film as well as theatrical.',
				caused : [
					{
						date : 'Dec 19 2014',
						group : 'cultural commentary'
					}
				]
			},
			{
				date : 'Dec 19 2014',
				text : 'Sony CEO denies that they made a mistake.'
			},
			{
				date : 'Dec 22 2014',
				text : 'Sony threatens Twitter with legal action for publishing email leaks.'
			},
			{
				date : 'Dec 23 2014',
				text : 'Sony approves limited US release of The Interview on Christmas Day.'
			},
			{
				date : 'Dec 25 2014',
				text : 'The Interview releases theatrically in the US.'
			},
			{
				date : 'Dec 29 2014',
				text : 'Online sales reach $18m.'
			},
		]
	},

	{
		name : 'guardians of peace',
		events : [
			{
				date : 'Nov 24 2014',
				text : 'GOP hacks Sony computers, leaving threatening message with warning about leaked documents.',
				caused : [
					{
						group : 'sony',
						date : 'Nov 24, 2014'
					},
					{
						group : 'cultural commentary',
						date : 'Dec 1, 2014'
					}
				]
			},
			{
				date : 'Dec 1 2014',
				text : 'Key Sony Christmas and awards titles such as Fury, Mr Turner and Annie released online by hackers.'
			},
			{
				date : 'Dec 3 2014',
				text : 'The Guardians of Peace group appear to have used the infrastructure of Sony’s PlayStation Network to spread a huge amount of stolen Sony Pictures’ data.',
				caused : [
					{
						date : 'Dec 6 2014',
						group : 'cultural commentary'
					},
					{
						date : 'Dec 10 2014',
						group : 'cultural commentary'
					},
					{
						date : 'Dec 12 2014',
						group : 'cultural commentary'
					}
				]
			},
			{
				date : 'Dec 9 2014',
				text : 'Guardians of Peace issue message demanding Sony pull The Interview: "Stop immediately showing the movie of terrorism which can break the regional peace and cause the War."'
			},
			{
				date : 'Dec 12 2014',
				text : 'Guardians of Peace threaten to leak other studios’ data.'
			},
			{
				date : 'Dec 16 2014',
				text : 'Guardians of Peace warn audiences cinemas screening The Interview may be subject to 9/11 style attack.',
				caused : [
					{
						date : 'Dec 16 2014',
						group : 'sony'
					},
					{
						date : 'Dec 17 2014',
						group : 'sony'
					},
					{
						date : 'Dec 18 2014',
						group : 'sony'
					}
				]
			},
		]
	},

	{
		name : 'north korea',
		events : [
			{
				date : 'Dec 4 2014',
				text : 'North Korea denies involvement in the hack.'
			},
			{
				date : 'Dec 8 2014',
				text : 'North Korea says Sony cyber-attack may be “righteous” work of its supporters but denies any direct responsibility.'
			},
			{
				date : 'Dec 19 2014',
				text : 'North Korea proposes joint inquiry into hack with US'
			},
			{
				date : 'Dec 21 2014',
				text : 'North Korea says it has evidence US government deeply involved in making of The Interview and threatens entire country in retaliation for any "proportional response"'
			},
			{
				date : 'Dec 22 2014',
				text : 'Widespread internet outages reported in North Korea',
				caused : {
					date : 'dec 22 2014',
					group : 'cultural commentary'
				}
			},
			{
				date : 'Dec 23 2014',
				text : 'North Korean internet resumes'
			},
		]
	},

	{
		name : 'u.S. investigators',
		events : [
			{
				date : 'Dec 2 2014',
				text : 'FBI begins investigations into North Korean involvement in the hack.',
				caused : {
					date : 'Dec 4 2014',
					group : 'north korea'
				}
			},
			{
				date : 'Dec 10 2014',
				text : 'FBI expresses scepticism about North Korea link.'
			},
			{
				date : 'Dec 11 2014',
				text : 'FBI says that leak would have challenged government data.'
			},
			{
				date : 'Dec 16 2014',
				text : 'Department of Homeland Security dismisses “active” threat.'
			},
			{
				date : 'Dec 18 2014',
				text : 'FBI announces that it is set to connect North Korea to the Sony hack after all.'
			},
			{
				date : 'Dec 19 2014',
				text : 'FBI concludes North Korea responsible for hack.',
				caused : {
					date : 'Dec 19, 2014',
					group : 'north korea'
				}
			},

			{
				date : 'Dec 20 2014',
				text : 'US says may put North Korea back on state terror list after Sony ‘cybervandalism’ by Obama says hack was not an act of war.',
				caused : {
					date : 'Dec 21, 2014',
					group : 'north korea'
				}
			},
		]
	},

	{
		name : 'cultural commentary',
		events : [
			{
				date : 'Dec 1 2014',
				text : 'Suspicions rise that North Korea may be behind the attack, though some analysts remain sceptical.',
				caused : {
					date : 'Dec 2 2014',
					group : 'u.S. investigators'
				}
			},
			{
				date : 'Dec 6 2014',
				text : 'Fusion reveals striking pay discrepancies between Sony employees of different genders and ethnicities.',
				caused : [
					{
						date : '15 Dec 2014',
						group : 'sony'
					}
				]
			},

			{
				date : 'Dec 10 2014',
				text : 'Defamer uncovers embarrassing emails between Sony co-chair Amy Pascal and producer Scott Rudin, charting the breakdown of their professional relationship, and discussing Angelina Jolie, David Fincher and Adam Driver.',
				caused : [
					{
						date : '15 Dec 2014',
						group : 'sony'
					}
				]
			},
			{
				date : 'Dec 12 2014',
				text : 'Embargo lifts on reviews of The Interview. Film wins warm if not ecstatic notices, with critics noting that Kim Jong-un is portrayed in a surprisingly positive light.'
			},
			{
				date : 'Dec 13 2014',
				text : 'Leaked email reveals surprising discrepancies in pay packets for male and female stars, including Jennifer Lawrence.',
				caused : [
					{
						date : '15 Dec 2014',
						group : 'sony'
					}
				]
			},
			{
				date : 'Dec 17 2014',
				text : 'Rival studios express disquiet over knock-on effect for Christmas box office of threat by Guardians of Peace.'
			},
			{
				date : 'Dec 18 2014',
				text : 'Obama calls for calm amid fresh threats of terrorism.'
			},
			{
				date : 'Dec 19 2014',
				text : 'Obama says Sony made a mistake in pulling movie.',
				caused : {
					date : 'Dec 23 2014',
					group : 'sony'
				}
			},
			{
				date : 'Dec 21 2014',
				text : 'Mike Myers’s Dr Evil comments on Saturday Night Live.'
			},
			{
				date : 'Dec 22 2014',
				text : 'Rumours that US is behind mysterious shutdown of North Korean internet access.'
			},
			{
				date : 'Dec 22 2014',
				text : 'White House approves of the decision to screen both in cinemas and online.'
			},
			{
				date : 'Dec 30 2014',
				text : 'Researchers claim former Sony employees could be responsible for the hack.'
			},
			{
				date : 'Dec 31 2014',
				text : 'South Korean activist vows to float balloons carrying copies of The Interview into North Korea.'
			},
		]
	}
]

visualizations.hebdoData = [
	{
		name : 'Charlie Hebdo',
		events : [
			{
				date : 'January 7 2015 11:30',
				text : '12 killed as masked gunmen storm Paris office',
				caused : [
					{
						date : 'January 7 2015 18:00',
						group : 'Public Reaction'
					},
					{
						date : 'January 8 2015 12:00',
						group : 'Public Reaction'
					},
					{
						date : 'January 8 2015 20:00',
						group : 'Public Reaction'
					},
				]
			},
			{
				date : 'January 8 2015 15:00',
				text : 'Charlie Hebdo announces it will publish the following Wednesday as scheduled.'
			}
		]
	},
	{
		name : 'Kouachi Brothers',
		events : [
			{
				date : 'January 7 2015 11:30',
				text : 'Kouachi brothers storm office of Charlie Hebdo, killing 12 including journalists and police',
				caused : [{
					date : 'January 7 2015 11:30',
					group: 'Charlie Hebdo'
					},
					{
						date : 'January 7 2015 12:30',
						group : 'Public Reaction'
				}]
			},
			{
				date : 'January 7 2015 12:00',
				text : 'The brothers crash their car, hijack another, telling the driver to tell the media that Al-Qaeda from Yemen is responsible for the attacks',
				caused : [
					{
						date : 'January 7 2015 12:30',
						group : 'Public Reaction'
					}
				]
			},
			{
				date : 'January 8 2015 10:00',
				text : 'Reports suggest the two suspects, heavily armed and wearing balaclavas, are seen driving north through Picardy. The pair rob a petrol station north-east of Paris. They drive off with assault rifles and rocket launchers visible in the back of their getaway car.',
				caused : [
					{
						date : 'January 8 2015 11:00',
						group : 'French Police'
					}
				]
			},
			{
				date : 'January 9 2015 08:10',
				text : 'The gunmen resurface and hijack a grey Peugeot 206 in the village of Montagny-Sainte-Félicité. A village teacher spots the men as they seize her vehicle. She says they are carrying weapons, including a rocket-propelled grenade launcher. The pair dump the Renault Clio they were driving earlier after it runs out of petrol.'
			},
			{
				date : 'January 9 2015 09:00',
				text : 'There is a shoot-out between the suspects and police on the N2 motorway. No one is hurt. The brothers drive into an industrial estate in the small village of Dammartin-en-Goële, 40km north-east of Paris. They take refuge in a printing works. A massive police operation gets underway involving armed officers and helicopters.'
			},
			{
				date : 'January 9 2015 17:00',
				text : 'Shots and explosions are heard at the siege at Dammartin-en-Goële, and heavily-armed counter-terror officers are seen moving in. The Charlie Hebdo gunmen are reported to have been killed and the hostage there freed.'
			}

		]
	},
	{
		name : 'Montrouge Gunmen',
		events : [
			{
				date : 'January 8 2015 08:00',
				text : 'A policewoman - 25-year-old trainee Clarissa Jean-Phillipe - is shot dead in the southern suburb of Montrouge. Police initially believe the shooting is unrelated, but later say that the Montrouge gunmen and the Kouachi brothers knew each other.',
				caused : [
					{
						date : 'January 8 2015 12:00',
						group : 'Public Reaction'
					}
				]
			},
			{
				date : 'January 9 2015 13:30',
				text: 'Reports that an armed man has taken a hostage in a Jewish grocery store at Porte de Vincennes in Paris.'
			},
			{
				date : 'January 9 2015 17:15',
				text : 'Loud bangs are heard at the site of the supermarket siege, with pictures showing some hostages being led out by police. Shortly afterwards, reports say the hostage takers at Dammartin-en-Goële, Chérif and Saïd Kouachi, were killed in the assault, as was the supermarket hostage taker, named in reports again as Amedy Coulibaly.'
			}
		]
	},
	{
		name : 'French Police',
		events : [
			{
				date : 'January 7 2015 20:30',
				text : 'Police identify three suspects as French brothers Said and Cherif Kouachi, and 18-year-old Hamyd Mourad.',
				caused : [
					{
						date : 'January 8 2015 00:00',
						group : 'Public Reaction',
					}
				]
			},
			{
				date : 'January 8 2015 11:00',
				text : 'Police conduct massive manhunt in the woods near the robbery of the petrol station in Picardy'
			},
			{
				date : 'January 9 2015 09:30',
				text : 'Police report that the two suspects have taken at least one hostage in a town called Dammartin-en-Goele near Charles de Gaulle airport. Police begin what French interior minister Bernard Cazeneuve calls a “major operation.”'
			},
			{
				date : 'January 9 2015 11:30',
				text : 'Police close in on the printing complex, Création Tendance Découverte. There are reports that one hostage is inside. According to French TV, he is a 26-year-old male. French special forces take up positions on the roof of surrounding buildings. Charles de Gaulle airport, 8kms away, is partly closed.'
			},
			{
				date : 'January 9 2015 14:00',
				text: 'Reports say the man suspected of killing a policewoman in Paris on Thursday is the hostage taker at the supermarket, and is holding around five people. Initial reports say people have been injured, but police later say this is not the case.'
			},
			{
				date : 'January 9 2015 14:30',
				text: 'Police name two people wanted in connection with the supermarket situation. They are Amedy Coulibaly and Hayat Boumeddiene, the first of whom is reported as the supermarket hostage taker. He has a long criminal history.'
			},
		]
	},
	{
		name : 'Public Reaction',
		events : [
			{
				date : 'January 7 2015 12:30',
				text : 'French president Francois Hollande visits the scene of the attack, labeling it as terrorism and act of “barbarism.” France goes on its highest terror alert level. Within an hour and a half, the hashtag #jesuischarlie begins to trend on Twitter.'
			},
			{
				date : 'January 7 2015 18:00',
				text : 'The people of Paris gather on Place de la République for a vigil, one of many around France and the world.'
			},
			{
				date : 'January 7 2015 20:00',
				text : 'Francois Hollande again addresses France, declaring a day of national mourning.'
			},
			{
				date : 'January 8 2015 00:00',
				text : 'Overnight, multiple mosques around the country are attacked. No one is reported injured or killed.'
			},
			{
				date : 'January 8 2015 12:00',
				text : 'France holds a moment of silence for the victims of the attacks.'
			},
			{
				date : 'January 8 2015 20:00',
				text : 'The Eiffel Tower goes dark to honor the victims of the attack.'
			},
			{
				date : 'January 9 2015 19:00',
				text : 'The French president, François Hollande, confirms that four hostages were killed and four wounded in the supermarket in Paris.'
			}
		]
	}

];

visualizations.fergusonData = [
	{
		name : 'Michael Brown',
		events : [
			
		]
	},
	{
		name : 'Darren Wilson',
		events : [
		]
	},
	{
		name : 'Ferguson Police',
		events : [
		]
	},
	{
		name : 'St. Louis Police',
		events : [
		]
	},
	{
		name : 'National Guard',
		events : [
		]
	},
	{
		name : 'Cultural Commentary',
		events : [
		]
	},
	{
		name : 'Public Response, Local',
		events : [

		]
	},
	{
		name : 'Public Response, National',
		events : [

		]
	},
]

window.addEventListener('init', function(e) {

	var opts = {
		container : document.querySelector('#case-study-vis-01'),
		w : document.querySelector('#case-study-vis-01').getBoundingClientRect().width * 1.5,
		reader : document.querySelector('#case-study-vis-reader-01'),
	}

	var ct1 = new CausalityTimeline(visualizations.interviewData, opts);

	ct1.stage
		.style({
			'margin-left' : -1 * ((ct1.w - ct1.container.getBoundingClientRect().width) / 2)
		})

	opts = {
		container : document.querySelector('#case-study-vis-02'),
		w : document.querySelector('#case-study-vis-02').getBoundingClientRect().width * 1.5,
		reader : document.querySelector('#case-study-vis-reader-02'),
		dateFormat : d3.time.format('%b %d, %I:%M%p'),
		increment : 1000 * 60 * 15
	}

	var ct2 = new CausalityTimeline(visualizations.hebdoData, opts);
	ct2.stage
		.style({
			'margin-left' : -1 * ((ct2.w - ct2.container.getBoundingClientRect().width) / 2)
		});

	opts = {
		container : document.querySelector('#case-study-vis-03'),
		w : document.querySelector('#')
	}

});