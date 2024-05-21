attractionItems = [];
attractionTags = [];
attractionCategory = [];
attractionLocation = [];
attractionCost = [];

// ------------ ATTRACTION TAGS ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

	attractionTags = ["Romantic", "Family-oriented", "Adventure", "Historic", "Local Hotspot", "Prestigious", "Scenic", "Educational", "Thrilling", "Cultural", "Entertainment", 
			  "Relaxing", "Interactive", "Iconic", "Unique", "Foodie", "Active", "Wildlife", "Artistic", "Instagrammable", "Transit Accessible", "MDA Accessible", "Quiet", "Movies", 
			  "Music", "Outdoor"];

	attractionCategory = ["none", "Art & Culture", "Attractions", "Business & Innovation", "Education & Learning", "Events & Festivals", "Family Fun", "Food & Drink", "Landmark", "Nightlife", 
			      "Shopping", "Sports & Recreation", "Wellness & Relaxation"];

	attractionLocation = ["none", "Airport City", "Downtown", "Highland", "Industrial City", "Newtown", "Northwood", "Oceanside", "Oldtown"];

	attractionCost = ["none","Free", "$", "$$", "$$$", "$$$$"];
	
// ------------ ATTRACTION ITEMS ----------------------------------------------------------------------------------------------------------------------------------------------------------------- //

	// attraction_link already includes https://aztechadmit.github.io/travelorasnou/things-to-do

	// Placeholder image: https://aztechadmit.github.io/travelorasnou/files/images/placeholder.jpg

	// attractionItems[NUM] = "name | description | tags | category | location | price | click_link | image_link";

	attractionItems[0] = "Coaster Capitol | A large amusement park with many roller coasters and rides | Thrilling,Adventure,Local Hotspot | Attractions | Industrial City | $$ | click_link | https://sf-static.sixflags.com/wp-content/uploads/2020/04/sfa-coaster.jpg";
	attractionItems[1] = "Globe-City Resort Highland | A popular resort with two hotels, a theme-park, and shopping center | Popular,Unique,All-Day,Themed | Attractions | Highland | $$$ | attractions/globe-city-resort-highland | https://gcparksandresorts.github.io/gcresorthighland/webresources/images/tts-entrance.jpg";
	attractionItems[2] = "Globe-City's Oceanside Resort | A beach front resort featuring a small amusement park | Popular,Beach-Access | Family Fun | Oceanside | $$$ | attractions/globe-city-oceanside-resort | https://www.oceanskyresort.com/files/1840/DJI_0063.jpg";
	attractionItems[3] = "Highland Studios | Minecraftia's largest movie studio and famous studio tour | Iconic,Historic,Movies | Attractions | Highland | $ | click_link | https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2019-04/1d9024c65063202d43bdfac0e073dab6.jpeg?h=c1692a99&itok=Ts8Ejha7";
	attractionItems[4] = "Industries Campus | Headquarters of R & R Industries, home of the iconic Industry Towers in the heart of Corporate Park | Iconic,Unique,Transit Accessible | Business & Innovation | Downtown | Free | click_link | https://aztechadmit.github.io/travelorasnou/files/images/placeholder.jpg";
	attractionItems[5] = "Industries Stadium | Famous stadium for large-scale concerts and sporting events | Popular,Transit-Accessible,Live-Entertainment,Concerts | Sports & Recreation | Highland | $$ | attraction_link | https://i.redd.it/i-built-this-football-stadium-for-my-minecraft-city-what-do-v0-xbgibw3xc32a1.png?width=1280&format=png&auto=webp&s=565de0e8ac3d98776fc4ba1b0e70636db820b0b5";
	attractionItems[6] = "Northwood Commons | An outdoor shopping plaza framing the gorgeous and historic Northwood Town Hall | Historic,Iconic,MDA Accessible | Shopping | Northwood | $$ | click_link | https://www.irvinecompanyapartments.com/rental-living/wp-content/uploads/2021/03/irvine-spectrum.jpeg";
	attractionItems[7] = "Northwood Town Hall | A historic landmark to the origins of Oras Nou and Northwood's district office overlooking Riverwood | Historic,Unique,Scenic | Landmark | Northwood | Free | click_link | https://aztechadmit.github.io/travelorasnou/files/images/placeholder.jpg";
	attractionItems[8] = "Oldtown Farmer's Market | A weekly market setup in the heart of Oldtown's historic Brick District | Unique,Cultural,Artistic,Foodie,Local Hotspot,Historic | Shopping | Oldtown | $$ | click_link | https://fox5sandiego.com/wp-content/uploads/sites/15/2022/06/AdobeStock_151195269-e1655596229709.jpeg?w=2560&h=1440&crop=1";
	attractionItems[9] = "Oldtown Sunflower Fields | Over three acres of hillside covered in gorgeous local flowers | Unique,Iconic,Instagrammable,Scenic | Attractions | Oldtown | $ | click_link | https://media.cbs8.com/assets/KFMB/images/dcd8543f-57dd-487c-a309-828b390dcefd/dcd8543f-57dd-487c-a309-828b390dcefd_1140x641.jpg";
	attractionItems[10] = "Oras Nou College of Art and Literature | A world-class college and performance centers | Educational,Prestigious,Transit Accessible,Concerts,Art | Education & Learning | Newtown | Free | attraction_link | https://i.pinimg.com/736x/4d/7c/c1/4d7cc11eb0ef75b26bffb53b8b4723af.jpg";
	attractionItems[11] = "Oras Nou Convention Center | A world-famous center of events and festivals | Entertainment,Iconic,Transit Accessible,MDA Accessible | Events & Festivals | Highland | $ | click_link | https://www.exhibitoronline.com/i/pr/ACCNorthExterior917c.jpg";
	attractionItems[12] = "Oras Nou Public Library | Massive library featured in iconic movie scenes | Historic,Iconic,Movies,Quiet,Unique | Education & Learning | Downtown | Free | click_link | https://cdn.thespaces.com/wp-content/uploads/2023/03/Bibliothe-que-nationale-de-france_HERO.jpg";
	attractionItems[13] = "Oras Nou STAGE | Famous outdoor concert venue overlooking Riverwood | Transit-Accessible,Live-Entertainment,Concerts,Iconic | Art & Culture | Highland | $$ | attraction_link | https://ca-times.brightspotcdn.com/dims4/default/d230055/2147483647/strip/true/crop/800x420+0+44/resize/1200x630!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F50%2Fff%2F40081cbf4c2498e7212c9788b84c%2F1953.jpg";
	attractionItems[14] = "Oras Nou Zoo | Minecraftia's largest Zoo and Environmental Studies Facility | Educational,Nature,Outdoors,All-Day,Wildlife | Attractions | Newtown | $$ | click_link | https://www.9minecraft.net/wp-content/uploads/2022/03/All-Animal-Zoo-Screenshots-1.jpg";
	attractionItems[15] = "Quartz City-Center Mall | An enormous shopping, dining, entertainment, and more complex in the heart of downtown | Local-Hotspot,Social,MDA-Accessible,Transit-Accessible | Shopping | Downtown | $$ | attraction_link | https://lamag.com/.image/t_share/MTk3NTU2MDc1OTEzNTUzNjAy/retail-district-level-2.jpg";
	attractionItems[16] = "Quartz Plaza | A multi-use outdoor venue located across the street from the Oras Nou Capitol | Local Hotspot,Entertainment,Music,Movies,Outdoor | Events & Festivals | Downtown | $$ | click_link | https://ca-times.brightspotcdn.com/dims4/default/b1eeb7b/2147483647/strip/true/crop/3800x2531+0+0/resize/1200x799!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F29%2Fc2%2F95a29dc2416b847f6924bfee14eb%2Fshell-spring2021-0036-1.jpg";
	attractionItems[17] = "Riverwood Hiking Trails and Recreation | Hike or bike through one of Minecraftia's most beautiful nature preserves | Adventure,Quiet,Active,Wildlife,Unique, | Sports & Recreation | Northwood | Free | click_link | https://worldview.stratfor.com/sites/default/files/styles/2x1_full/public/main/images/indus-water.jpg?itok=C2sURqX2";
	attractionItems[18] = "Riverwood Road | An iconic drive alongisde and over the Riverwood nature preserve between Downtown and Highland | Unique,Relaxing,Iconic,Instagrammable,Adventure | Landmark | Northwood | Free | click_link | https://nztoday.co.nz/wp-content/uploads/2018/11/1-Waitaki-Valley-NZT83.jpg";
	attractionItems[19] = "Sunvalley Bridge | A scenic overlook crossing the Riverwood valley | Scenic,Unique,Free,Quiet,Iconic,Instagrammable | Landmark | Downtown | Free | attractions/sunvalley-bridge | https://www.indianriverbridge.com/wp-content/uploads/image.png";
	attractionItems[20] = "The Aztech Theater | Prestigious theater home to the Oscars and many broadway productions in the heart of Highland | Cultural,Entertainment,Instagrammable,Prestigious,Iconic | Art & Culture | Highland | $$$ | click_link | https://www.historictheatrephotos.com/Resources/Theatre-Photos/Dolby-Los-Angeles/Photos/Auditorium/First_Mezzanine_Center.jpg";
	attractionItems[21] = "The Casa de Cafe Experience | Tour the Casa De Cafe production facility and try experimental food and beverages | Foodie,Unique | Food & Drink | Industrial City | $$ | click_link | https://assets.vogue.com/photos/5a270de4f73bec258189118b/master/w_2560%2Cc_limit/01-story-image-new-largest-starbucks-coffee-roastery-shanghai.jpg";
	attractionItems[22] = "Themepark Cafe | A themed restaurant featuring unique dining areas | Unique,Local-Hotspot,Themed,Instagrammable | Food & Drink | Northwood | $$$ | attraction_link | https://www.davidthemingworks.com/EN/images/THE-CAVE-THEME-PARK-RESTAURANT--8-_3wa5c5ed.jpg";
	attractionItems[23] = "University of Minecraftia Oras Nou | A prestigious university campus and medical center | Educational,Prestigious,Transit Accessible | Education & Learning | Downtown | Free | attraction_link | https://i.imgur.com/84Iq0cb.jpg";
