attractionPageTitle = []; // Title of the page to display
attractionPageDescription = []; // Summary of the Attraction / What it is
attractionPageMore = []; // More general information - not necessary (if blank section will be ommited)
attractionPageTags = []; // Tags pertaining to this attraction

attractionPageBanner = []; // Image link for the banner of the page
attractionPageImages = []; // List of two image links

attractionPageLink = []; // Link to the official website of this attraction
attractionPageSimilar = []; // Input the category of this attraction to search for similar ones
attractionSeeAlso = []; // Links other related attractions - will show as hyperlinks (or buttons idk yet)

// Example Link: https://aztechadmit.github.io/travelorasnou/things-to-do/pages/attraction?index=1

/* NEW ELEMENT:

	attractionPageTitle[NUM] = "page_title";
	attractionPageDescription[NUM] = "short_description";
	attractionPageMore[NUM] = "longer_description";
	attractionPageTags[NUM] = "attraction_tags";

 	attractionPageLink[NUM] = "attraction_site_link";
  	attractionPageSimilar[NUM] = "attractio_search_category | attraction_location";
   	attractionSeeAlso[NUM] = "first_name | first_link || second_name | second_link";
 
 	attractionPageBanner[NUM] = "link_to_banner_image";
  	attractionPageImages[NUM] = "image_link_one | image_link_two";

   	/* ----	IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */

	attractionPageTitle[0] = "Globe-City's Adventure Park";
	attractionPageDescription[0] = "A fully immersive theme park centered around Adventure and fun for everyone! Part of the famous <a href='https://gcparksandresorts.github.io/gcresorthighland'>Globe-City Resort Highland</a>, a vacation destination featuring a theme park, two hotels, and an electric shopping & dining experience.";
	attractionPageMore[0] = "Opened on May 26, 2016, Globe-City's Adventure Park has entertained millions of guests looking for fun new adventures. Adventure Park is Globe-City Entertainment's flagship theme park and features a multitude of immersive dark rides, thrilling rollercoasters, and dazzling entertainment.";
	attractionPageTags[0] = "Family Oriented,Outdoors,Adventure";

 	attractionPageLink[0] = "https://gcparksandresorts.github.io/gcresorthighland/destinations/adventure-park";
  	attractionPageSimilar[0] = "Attractions | Highland";
	attractionSeeAlso[0] = "City-Shop at the GC Resort Highland | https://gcparksandresorts.github.io/gcresorthighland/destinations/city-shop || The Aztech Resort | https://gcparksandresorts.github.io/gcresorthighland/destinations/the-aztech-resort || Globe-City's Lakeside Hotel | https://gcparksandresorts.github.io/gcresorthighland/destinations/globe-citys-lakeside-hotel";
 
 	attractionPageBanner[0] = "https://gcparksandresorts.github.io/gcresorthighland/webresources/images/tts-entrance.jpg";
  	attractionPageImages[0] = "https://gcparksandresorts.github.io/gcresorthighland/webresources/images/tts3.jpg | https://blooloop.com/wp-content/uploads/2016/11/Ghostbusters-triotech.jpg | https://gcparksandresorts.github.io/gcresorthighland/webresources/images/fotd1.jpg";

	/* ----------------------------------------------------------------------------------------------------------------------------------- */

	attractionPageTitle[1] = "The Bautista Aquarium of Oceanside";
	attractionPageDescription[1] = "Journey into the deep as you explore vast expanses of aquariums full of life and movement.";
	attractionPageMore[1] = "The Bautista Aquarium exhibits hundreds of species and thousands of animals across its six major galleries, all of which reside in more than 8 million US gallons of water.<p>The aquarium's notable specimens include whale sharks, beluga whales, California sea lions, bottlenose dolphins, manta rays, sea otters, and tiger sharks.</p>";
	attractionPageTags[1] = "Family Oriented,Adventure,Educational,Wildlife,Instagrammable,Transit Accessible,MDA Accessible,Romantic,All-Day";

 	attractionPageLink[1] = "nan";
  	attractionPageSimilar[1] = "Attractions | Oceanside";
   	attractionSeeAlso[1] = "Eastpoint Beach | link || Your Moms Hauwse | https://www.pornhub.com";
 
 	attractionPageBanner[1] = "https://www.georgiaaquarium.org/wp-content/uploads/2019/05/GAQ-Digital-Marketing-201-1.jpg";
  	attractionPageImages[1] = "https://ourlittlelifestyle.com/storage/2021/09/Georgia-Aquarium-02.jpg | https://res.klook.com/image/upload/c_fill,w_750,h_500/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/zdhxryz7tekjuorya1nd.jpg";

   	/* ----------------------------------------------------------------------------------------------------------------------------------- */

	attractionPageTitle[2] = "Coaster Capitol";
	attractionPageDescription[2] = "Coaster Capitol was Oras Nou's original amusement park. Boasting exhilerating coasters for all ages and an atmosphere full of fun and excitement for everyone!";
	attractionPageMore[2] = "Welcome to Coaster Capitol, your go-to destination for thrilling rides and non-stop fun! Our amusement park is packed with an array of exciting roller coasters and rides that cater to all ages and adventure levels. Whether you're a thrill-seeker looking for heart-pounding experiences or a family seeking a day of joyful rides, Coaster Capitol has something for everyone. Come and enjoy a day filled with pure excitement and unforgettable moments on our variety of rides. Coaster Capitol – where the adventure never ends!";
	attractionPageTags[2] = "Outdoors,Thrilling,Adventure,Local Hotspot";

 	attractionPageLink[2] = "nan";
  	attractionPageSimilar[2] = "Attractions | Industrial City";
   	attractionSeeAlso[2] = "Globe-City Adventure Park | https://aztechadmit.github.io/travelorasnou/things-to-do/pages/attraction?index=0 || Mini-Park Oceanside | https://aztechadmit.github.io/travelorasnou/things-to-do/pages/attraction?index=0";
 
 	attractionPageBanner[2] = "https://costar.brightspotcdn.com/dims4/default/ea42302/2147483647/strip/true/crop/2100x1400+0+0/resize/2100x1400!/quality/100/?url=http%3A%2F%2Fcostar-brightspot.s3.us-east-1.amazonaws.com%2Fe9%2F43%2F8a18790240a4b23be1e39df63724%2Fcarowinds.jpg";
  	attractionPageImages[2] = "https://npr.brightspotcdn.com/31/56/688fb68b4215ad233a6a57835d5c/rollercoaster-north-carolina-23184750648493.jpg | https://travel.usnews.com/images/rollercoaster-rides-amusement-park-sky.jpg | https://b2290346.smushcdn.com/2290346/wp-content/uploads/2022/04/E10430A3-DBBE-4705-BB8D-4266EBBDE296-scaled.jpeg?lossy=2&strip=1&webp=1";

   	/* ----	IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */

	attractionPageTitle[3] = "The Rose Petal";
	attractionPageDescription[3] = "A lively indie concert venue in Downtown's Rose District, The Rose Petal also boasts a bar with tasty snacks and drinks to enjoy during the show.";
	attractionPageMore[3] = "The Rose Petal is an iconic concert venue located in the heart of Oras Nou's vibrant Rose District. Renowned as the birthplace of many famous Minecraftian musicians, comedians, drag queens, and more, it’s a spiritual haven where anything can happen. Over its 9+ year lifespan, The Rose Petal has hosted thousands of unforgettable performances, establishing itself as a cornerstone of the arts community. Despite numerous refurbishments and improvements, the venue's unique character and charm remain intact, continuing to inspire both artists and audiences alike.";
	attractionPageTags[3] = "Music,LGBTQ,Local Hotspot,Entertainment,Iconic";

 	attractionPageLink[3] = "nan";
  	attractionPageSimilar[3] = "Entertainment | Downtown";
   	attractionSeeAlso[3] = "Oras Nou STAGE | https://aztechadmit.github.io/travelorasnou/things-to-do/pages/attraction?index=4 || Quartz Plaza | second_link";
 
 	attractionPageBanner[3] = "https://d3i6fh83elv35t.cloudfront.net/static/2023/07/Hot-Chip-at-The-Atlantis-3-Photo-by-Troy-Gerhardt-1024x683.jpg";
  	attractionPageImages[3] = "https://www.billboard.com/wp-content/uploads/2022/08/Dave-Grohl-of-Foo-Fighters-2022-billboard-1548.jpg?w=942&h=623&crop=1 | https://i.redd.it/atlantis-post-show-update-amazing-all-around-the-sound-was-v0-y4wlynxf5q2b1.jpg?width=4032&format=pjpg&auto=webp&s=fe905fa896753de60abbb1de55c5946f27b83e59 | https://seattlemusicinsider.com/wp-content/uploads/2023/10/nggallery_import/Nightly-@-Neumos-10-18-23-6.jpg";

   	/* ----	IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */

	attractionPageTitle[4] = "Oras Nou STAGE";
	attractionPageDescription[4] = "short_description";
	attractionPageMore[4] = "longer_description";
	attractionPageTags[4] = "attraction_tags";

 	attractionPageLink[4] = "attraction_site_link";
  	attractionPageSimilar[4] = "attractio_search_category | attraction_location";
   	attractionSeeAlso[4] = "first_name | first_link || second_name | second_link";
 
 	attractionPageBanner[4] = "link_to_banner_image";
  	attractionPageImages[4] = "image_link_one | image_link_two";

   	/* ----	IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */

	attractionPageTitle[5] = "page_title";
	attractionPageDescription[5] = "short_description";
	attractionPageMore[5] = "longer_description";
	attractionPageTags[5] = "attraction_tags";

 	attractionPageLink[5] = "attraction_site_link";
  	attractionPageSimilar[5] = "attractio_search_category | attraction_location";
   	attractionSeeAlso[5] = "first_name | first_link || second_name | second_link";
 
 	attractionPageBanner[5] = "link_to_banner_image";
  	attractionPageImages[5] = "image_link_one | image_link_two";

   	/* ----	IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */

