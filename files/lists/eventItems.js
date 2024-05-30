// ---------------------------------------------------------------------------------------- CATEGORIES ETC -----------------------------------------------------

	eventCategory = ["none", "Music Festival", "Cultural Festival", "Seasonal Celebration", "Special Event", "Concerts & Theater", "Traveling"];

	eventMonths = ["none", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	eventTags = ["Local Favorite", "Popular", "Outdoors", "Music", "Live Entertainment", "Televised", "Adult Oriented", "Family Oriented", "Limited Entry", "Fireworks","LGBTQ"];


	eventCost = ["none","Free Entry","$","$$","$$$","$$$$"];

	eventLocation = ["none", "Airport City", "Downtown", "Highland", "Industrial City", "Newtown", "Northwood", "Oceanside", "Oldtown"];

	eventVenue = ["none", "Quarts Plaza", "Oras Nou STAGE", "The Rose Petal", "Club Nou", "The Aztech Theater", "Lea Kra Sasson Concert Hall", "Sussman Performing Arts Center", "Industries Stadium", "SkyNet Theater", 
		      "Diamond Center Stadium", "City-Shop", "", ""];

	eventItems = [];
// ---------------------------------------------------------------------------------------- EVENT ITEMS -- -----------------------------------------------------	

//							Months is comma separated list of INTEGER numbers - days correspond with each month -> may,june | 1,2 = May 1st and June 2nd -> 'nan' for days means no specific dates!
//	eventItems[NUM] = "event_name0 | category1 | venue2 | location3 | months4 | days5 | price6 | description7 | tags8 | image_link9 | click_link10";

	eventItems[0] = "Oras Nou Charity Concert by AXIOM Insurance | Music Festival | Quartz Plaza | Downtown | August | 3-4 | $$ | An annual charity concert supporting Oras Nou Resident Aid programs. Televised across the entire Minecraftian nation, this 2-day event is a holiday on its own! | Local Favorite,Outdoors,Live Entertainment,Televised,Limited Entry | https://www.rollingstone.com/wp-content/uploads/2024/04/coachella-guests-lead-shakira-bizarrap-.jpg?w=1581&h=1054&crop=1 | click_link";
	eventItems[1] = "Globe-City's SummerFest Celebration | Seasonal Celebration | Globe-City Resort Highland | Highland | June,July,August | nan | $$ | Globe-City's annual summer celebration featuring thrilling rides, exciting entertainment, and fun for everyone! | Popular,Outdoors,Live Entertainment,Fireworks,Family Oriented | https://i.imgur.com/UG5uOpW.jpeg | https://gcparksandresorts.github.io/gcresorthighland/events/summerfest";
	eventItems[2] = "Oras Nou PRIDE | category | Quartz Plaza | Downtown | June | 13-21 | $ | Minecraftia's largest Pride celebration featuring a whole month of festivities | LGBTQ,Televised,Local Favorite,Popular,Outdoors | https://sdpride.org/wp-content/uploads/2020/04/homepage.jpg | click_link";
	eventItems[3] = "event_name0 | category1 | venue2 | location3 | May | days5 | price6 | description7 | tags8 | image_link9 | click_link10";
	eventItems[4] = "Globe-City's Season of Light | Seasonal Celebration | Globe-City Resort Highland | Highland | November,December | nan | $$ | This annual celebration brings together the magic of the holiday season featuring unique entertainmen, dining, and an award winning fireworks display | Popular,Outdoors,Live Entertainment,Fireworks,Family Oriented | https://decider.com/wp-content/uploads/2022/12/disney-christmas-day-parade-1.jpg?quality=75&strip=all | https://gcparksandresorts.github.io/gcresorthighland/events/season-of-light";
