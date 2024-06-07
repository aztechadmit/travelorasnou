placePageTitle = []; // Title of the page to display
placePageDescription = []; // Summary of the Place / What it is
placePageMore = []; // More general information - not necessary (if blank section will be ommited)
placePageTags = []; // Tags pertaining to this place

placePageBanner = []; // Image link for the banner of the page
placePageImages = []; // List of two image links

placePageLink = []; // Link to the official website of this place
placePageSimilar = []; // Input the category of this place to search for similar ones
placeSeeAlso = []; // Links other related places - will show as hyperlinks (or buttons idk yet)

placeCategory = ["none", "Art & Culture", "Places", "Business & Innovation", "Education & Learning", "Entertainment", "Food & Drink", "Nightlife", 
			      "Shopping", "Sports & Recreation", "Wellness & Relaxation"];

// Example Link: https://aztechadmit.github.io/travelorasnou/things-to-do/pages/place?index=1

/* NEW ELEMENT:

	placePageTitle[NUM] = "page_title";
	placePageDescription[NUM] = "short_description";
	placePageMore[NUM] = "longer_description";
	placePageTags[NUM] = "place_tags";

 	placePageLink[NUM] = "place_site_link";
  	placePageSimilar[NUM] = "place_location";
   	placeSeeAlso[NUM] = "first_name | first_link || second_name | second_link";
 
 	placePageBanner[NUM] = "link_to_banner_image";
  	placePageImages[NUM] = "image_link_one | image_link_two";

   /* ----IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */

	placePageTitle[0] = "The Rose District";
	placePageDescription[0] = "short_description";
	placePageMore[0] = "longer_description";
	placePageTags[0] = "LGBTQ,Art & Culture,Nightlife";

 	placePageLink[0] = "place_site_link";
  	placePageSimilar[0] = "Downtown";
   	placeSeeAlso[0] = "Jacob's on Rose | attraction?index=15 || The Rose Petal | attraction?index=3";
 
 	placePageBanner[0] = "link_to_banner_image";
  	placePageImages[0] = "image_link_one | image_link_two";

   /* ----IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */
