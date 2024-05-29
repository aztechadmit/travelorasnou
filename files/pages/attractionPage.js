attractionPageTitle = []; // Title of the page to display
attractionPageDescription = []; // Summary of the Attraction / What it is
attractionPageMore = []; // More general information - not necessary (if blank section will be ommited)
attractionPageTags = []; // Tags pertaining to this attraction

attractionPageBanner = []; // Image link for the banner of the page
attractionPageImages = []; // List of two image links

attractionPageLink = []; // Link to the official website of this attraction
attractionPageSimilar = []; // Input the category of this attraction to search for similar ones
attractionSeeAlso = []; // Links other related attractions - will show as hyperlinks (or buttons idk yet)

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
  	attractionPageImages[0] = "https://blooloop.com/wp-content/uploads/2016/11/Ghostbusters-triotech.jpg | https://gcparksandresorts.github.io/gcresorthighland/webresources/images/fotd1.jpg";

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
