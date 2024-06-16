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

	placePageTitle[0] = "The Rose Avenue District";
	placePageDescription[0] = "The Rose Avenue District is the center of Oras Nou's LGBTQ scene, with bustling gay bars, delightful art galleries, hair salons, boutiques, karaeoke bars, street-side restaurants, and more! The district over the years has extended beyond the 0.8 mile long Rose Avenue and now sits as a bustling and happy village with love and magic in the air.";
	placePageMore[0] = "longer_description";
	placePageTags[0] = "LGBTQ,Art & Culture,Nightlife";

 	placePageLink[0] = "nan";
  	placePageSimilar[0] = "Downtown";
   	placeSeeAlso[0] = "Jacob's on Rose | attraction?index=15 || The Rose Petal | attraction?index=3";
 
 	placePageBanner[0] = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Rainbow_Crossing_on_Campbell_Street_in_Surry_Hills_%282%29.jpg/1200px-Rainbow_Crossing_on_Campbell_Street_in_Surry_Hills_%282%29.jpg";
  	placePageImages[0] = "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/49000/49172-The-Village.jpg | https://www.oldham-chronicle.co.uk/uploads/f2/news/img/2021826_82642.jpg";

   /* ----IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */

	placePageTitle[1] = "Exposition Park";
	placePageDescription[1] = "In the heart of Downtown, Exposition Park is a mini-district dedicated to art, history, innovation, and exhibits with things from across the world. Originally constructed in 2001, Exposition Park was opened to the public with the idea of being a place where people could learn anything and explore the magnicicent cultures, countries, and wonders around us. Today the park is home to many museums, art exhibits, exhibit halls, and attractions.";
	placePageMore[1] = "longer_description";
	placePageTags[1] = "Art & Culture,Learning,Entertainment";

 	placePageLink[1] = "nan";
  	placePageSimilar[1] = "Downtown";
   	placeSeeAlso[1] = "Oras Nou AeroTower | attraction?index=16 || Lea Kra Sasson Concert Hall | attraction?index=8 || The Mystique - Circular Theater | attraction?index=10 || Museum of Oras Nou | attraction?index=nan || Connorslong Museum of Natural History | attraction?index=nan || Mendez Art Pavillion | attraction?index=nan || Avner Sasson Innovation Pavillion | attraction?index=nan || Keppler Aerospace Pavllion | attraction?index=nan";
 
 	placePageBanner[1] = "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/c0/b6.jpg";
  	placePageImages[1] = "https://th-thumbnailer.cdn-si-edu.com/f8d7yehJjD46qGh_QNlXrLovqzo=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/35/39/35399575-62c7-41cb-bda3-1b0a9f7cca8b/main_borderlesswaorl_takihana_2_3_high.jpg | https://www.washingtonpost.com/resizer/sOZorjVT0LyNdDt82Fsh1lRZE_s=/arc-anglerfish-washpost-prod-washpost/public/TUQSDMUB5BPOIQBUMDSLBA7SVU.JPG | https://a.travel-assets.com/findyours-php/viewfinder/images/res70/480000/480454-Balboa-Park.jpg";

   /* ----IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */

	placePageTitle[2] = "Little Tokyo District";
	placePageDescription[2] = "short_description";
	placePageMore[2] = "longer_description";
	placePageTags[2] = "place_tags";

 	placePageLink[2] = "place_site_link";
  	placePageSimilar[2] = "place_location";
   	placeSeeAlso[2] = "first_name | first_link || second_name | second_link";
 
 	placePageBanner[2] = "link_to_banner_image";
  	placePageImages[2] = "image_link_one | image_link_two";

   /* ----IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */

	placePageTitle[3] = "Oceanside Shores";
	placePageDescription[3] = "Explroe this cute coastal village in the heart of Oceanside. Stroll down tree lined avenues with the cool ocean air blowing past cute store fronts, bustling restaurants, wine bars, art galleries, and more! There's much to explore in this lively town nestled between gorgeous hillsides and the blocklantic ocean.";
	placePageMore[3] = "longer_description";
	placePageTags[3] = "Outdoor,Shopping,Foodie,Family Oriented,Romantic,Coastal";

 	placePageLink[3] = "nan";
  	placePageSimilar[3] = "Oceanside";
   	placeSeeAlso[3] = "Oceanside Village | attraction?index=nan || Eastpoint Beach | attraction?index=nan";
 
 	placePageBanner[3] = "https://www.shutterstock.com/image-photo/playa-del-carmen-26-march-600nw-2289447361.jpg";
  	placePageImages[3] = "https://media.cntraveler.com/photos/5a8ecbbc8087c02669a7d9e5/16:9/w_2560,c_limit/La-Jolla-Torrey-Pines-State-Park--Courtesy-SanDiego.org.jpg | https://img.govisitsandiego.com/guides/things-to-do/shopping/shopping-in-downtown-la-jolla/lrg-fine-art-gallery-in-the-village-of-la-jolla.webp | https://ca-times.brightspotcdn.com/dims4/default/b2d1416/2147483647/strip/true/crop/2520x1554+0+0/resize/1200x740!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fc5%2Faf%2F658d45044abfa13ef976b2263711%2Fcm-ljl-homes-sold-shoreline-jpg.jpg";

   /* ----IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */
