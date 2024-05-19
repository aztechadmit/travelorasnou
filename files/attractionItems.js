const attractionItems = [];
const attractionTags = [];
const attractionCategory = [];
const attractionLocation = [];
const attractionCost = [];

// ------------ ATTRACTION TAGS ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

	attractionTags = ["Romantic", "Local-Hotspot", "Popular", "Unique", "LGBTQ", "Scenic", "Quiet", "Cultural", "Transit-Accessible", "MDA-Accessible", "Learning", "Prestigious", "Social", "Beach-Access", "Outdoors", "Nature", "", "", "", "", "", "", ""];

	attractionCategory = ["Food-and-Drink", "Sports", "Entertainment", "Leisure", "Hospitality", "Attractions", "Museum", "Shopping", "Amusement-Park", "Resort-Hotel", "", "", "", "", ""];
	attractionLocation = ["Downtown", "Newtown", "Oldtown", "Industrial-City", "Highland", "Northwood", "Airport-City", "Oceanside", "Riverwood"];
	attractionCost = ["Free", "$", "$$", "$$$", "$$$$"];
	
// ------------ ATTRACTION ITEMS ----------------------------------------------------------------------------------------------------------------------------------------------------------------- //

	// attraction_link already includes https://aztechadmit.github.io/travelorasnou/things-to-do

	// attractionItems[NUM] = "category | location | cost | tags | attraction_name | attraction_photo | attraction_link";

	attractionItems[0] = "Amusement-Park | Highland | $$$ | Popular,Unique | Globe-City Resort Highland | https://gcparksandresorts.github.io/gcresorthighland/webresources/images/tts-entrance.jpg | attractions/globe-city-resort-highland";
	attractionItems[1] = "Resort-Hotel | Oceanside | $$$ | Popular,Beach-Access | Globe-City's Oceanside Resort | https://www.oceanskyresort.com/files/1840/DJI_0063.jpg | attractions/globe-city-oceanside-resort";
	attractionItems[2] = "Attractions | Downtown | Free | Scenic,Unique,Free,Quiet | Sunvalley Bridge | https://www.indianriverbridge.com/wp-content/uploads/image.png | attractions/sunvalley-bridge";
