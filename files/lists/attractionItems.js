attractionItems = [];
attractionTags = [];
attractionCategory = [];
attractionLocation = [];
attractionCost = [];

// ------------ ATTRACTION TAGS ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

	attractionTags = ["Romantic", "Family Oriented", "Adventure", "Historic", "Local Hotspot", "Prestigious", "Scenic", "Educational", "Thrilling", "Cultural", "Entertainment", 
			  "Relaxing", "Interactive", "Iconic", "Unique", "Foodie", "Active", "Wildlife", "Artistic", "Instagrammable", "Transit Accessible", "MDA Accessible", "Quiet", "Movies", 
			  "Music", "Outdoor","LGBTQ", "Broadway", "Technology", "Corporate", "Karaoke", "Beach Access", "All-day"];

	attractionCategory = ["none", "Art & Culture", "Attractions", "Business & Innovation", "Education & Learning", "Entertainment", "Food & Drink", "Nightlife", 
			      "Shopping", "Sports & Recreation", "Wellness & Relaxation"];

	attractionLocation = ["none", "Airport City", "Downtown", "Highland", "Industrial City", "Newtown", "Northwood", "Oceanside", "Oldtown"];

	attractionCost = ["none","Free", "$", "$$", "$$$", "$$$$"];

	const quickLink = "https://aztechadmit.github.io/travelorasnou/things-to-do/pages/attraction";
	
// ------------ ATTRACTION ITEMS ----------------------------------------------------------------------------------------------------------------------------------------------------------------- //

	// attraction_link already includes https://aztechadmit.github.io/travelorasnou/things-to-do

	// Placeholder image: https://aztechadmit.github.io/travelorasnou/files/images/placeholder.jpg

	// attractionItems[NUM] = "name | description | tags | category | location | price | "+quickLink+"?index=nan | image_link";

	// CLICK LINK EXAMPLE: "+quickLink+"?index=NUM

	attractionItems[0] = "Aviation Park | A beautiful recreation space perfect for plane watching | Scenic,Relaxing,Romantic,Instagrammable | Wellness & Relaxation | Airport City | Free | "+quickLink+"?index=nan | https://i0.wp.com/travelawaits.com/wp-content/uploads/2021/04/watching-a-plane-land-from-in937652.png?resize=1024%2C610&ssl=1";
	attractionItems[1] = "Bautista Aquarium of Oceanside | A massive aquarium featuring dozens of large-scale exhibits and fishies | Family Oriented,Adventure,Educational,Wildlife,Instagrammable,Transit Accessible,MDA Accessible,Romantic,All-Day | Attractions | Oceanside | $$ | "+quickLink+"?index=1 | https://www.georgiaaquarium.org/wp-content/uploads/2019/05/GAQ-Digital-Marketing-201-1.jpg";
	attractionItems[2] = "Capitol Park | Center of the Oras Nou province capitol and headquarters of our ministries and government organizations | Iconic,Quiet,Historic,Educational | Education & Learning | Downtown | Free | "+quickLink+"?index=nan | https://www.nps.gov/common/uploads/places/images/nri/20131126/siteadmin/D2F5EA00-C5B7-F538-0D33DD9DB13B2BBF/D2F5EA00-C5B7-F538-0D33DD9DB13B2BBF.jpg";
	attractionItems[3] = "Club Nou | An elite nightclub featuring live music, city vistas, on-trend food, and nights full of fun | Prestegious,Entertainment,Music,Foodie,Iconic | Nightlife | Downtown | $$$ | "+quickLink+"?index=nan | https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyeGUtatUji7EFMfL3wdWXYEAXKKFwC58EyPt6B1KYD34Iuzmr0gFb9p_NccG942ZE4Hcf2E7wUOX5w56RZ6GhOXNtT6U2aWcR-S-VNvk44wGyfG5JX9nQ4Mx7vuf9D5_20KMHXEAMM96WpgQHR_iVRsICyvFAN0mQreDohtlZKxNRuoK6udIgycPMhQ/s5656/8I33srd0.jpeg";
	attractionItems[4] = "Coaster Capitol | A large amusement park with many roller coasters and rides | Thrilling,Adventure,Local Hotspot | Attractions | Industrial City | $$ | "+quickLink+"?index=2 | https://sf-static.sixflags.com/wp-content/uploads/2020/04/sfa-coaster.jpg";
	attractionItems[5] = "Eastpoint Beach | A large public beach and recreation space on the eastern-most part of mainland Minecraftia | Transit Accessible,Outdoor,Local Hotspot,Beach Access | Sports & Recreation | Oceanside | Free | "+quickLink+"?index=nan | https://oceanbeachsandiego.com/sites/default/files/d7/user1/point-loma-san-diego-california.jpg";
	attractionItems[6] = "Globe-City's Adventure Park | A unique world-famous theme park destination for all ages featuring two hotels | Popular,Unique,All-Day,Themed,Iconic,Interactive | Attractions | Highland | $$$ | "+quickLink+"?index=0 | https://gcparksandresorts.github.io/gcresorthighland/webresources/images/tts-entrance.jpg";
	attractionItems[7] = "Globe-City's Oceanside Resort | A beach front resort featuring a small amusement park | Popular,Beach-Access | Family Fun | Oceanside | $$$ | attractions/globe-city-oceanside-resort | https://www.oceanskyresort.com/files/1840/DJI_0063.jpg";
	attractionItems[8] = "Highland Studios | Minecraftia's largest movie studio and famous studio tour | Iconic,Historic,Movies | Attractions | Highland | $ | "+quickLink+"?index=13 | https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2019-04/1d9024c65063202d43bdfac0e073dab6.jpeg?h=c1692a99&itok=Ts8Ejha7";
	attractionItems[9] = "Highland Walk of Stars | Nearly a mile of Highland avenue dedicated to the film and media industry | Movies,Iconic,Historic,Unique,Transit Accessible,Karaoke | Attractions | Highland | Free | "+quickLink+"?index=14 | https://cdn.vox-cdn.com/thumbor/05U_pWw12PVvSQX_vHeBA13CM94=/0x0:4800x2700/1200x800/filters:focal(2016x966:2784x1734)/cdn.vox-cdn.com/uploads/chorus_image/image/66229480/20200103_HWOF_Rendering_AerialView.0.jpg";
	attractionItems[10] = "Industries Campus | Headquarters of R & R Industries, home of the iconic Industry Towers in the heart of Corporate Park | Iconic,Unique,Transit Accessible | Business & Innovation | Downtown | Free | "+quickLink+"?index=nan | https://aztechadmit.github.io/travelorasnou/files/images/placeholder.jpg";
	attractionItems[11] = "Industries Stadium | Famous stadium for large-scale concerts and sporting events | Popular,Transit-Accessible,Live-Entertainment,Concerts | Sports & Recreation | Highland | $$ | "+quickLink+"?index=9 | https://i.redd.it/i-built-this-football-stadium-for-my-minecraft-city-what-do-v0-xbgibw3xc32a1.png?width=1280&format=png&auto=webp&s=565de0e8ac3d98776fc4ba1b0e70636db820b0b5";
	attractionItems[12] = "Lea Kra Sasson Concert Hall | A prestigious orchestral concert venue. Part of Expositon Park in the heart of Downtown | Historic,Cultural,Entertainment,Music,MDA Accessible,Artistic,Iconic | Art & Culture | Downtown | $$ | "+quickLink+"?index=8 | https://media.timeout.com/images/101758989/750/422/image.jpg";
	attractionItems[13] = "Mystic Visual | Headquarters of Minecraftia's pioneering animation and computer generated visuals contractor. Also visit the small museum dedicated to the history of animation | Technology,Corporate,Movies | Business & Innovation | Highland | Free | "+quickLink+"?index=nan | https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2015/09/vodafone-headquarters-3.jpg?resize=1000%2C666&ssl=1";
	attractionItems[14] = "Northwood Commons | An outdoor shopping plaza framing the gorgeous and historic Northwood Town Hall | Historic,Iconic,MDA Accessible | Shopping | Northwood | $$ | "+quickLink+"?index=nan | https://www.irvinecompanyapartments.com/rental-living/wp-content/uploads/2021/03/irvine-spectrum.jpeg";
	attractionItems[15] = "Northwood Town Hall | A historic landmark to the origins of Oras Nou and Northwood's district office overlooking Riverwood | Historic,Unique,Scenic | Landmark | Northwood | Free | "+quickLink+"?index=nan | https://aztechadmit.github.io/travelorasnou/files/images/placeholder.jpg";
	attractionItems[16] = "Nytz Tavern | A lively pub featuring pool games, drinks, and an enthraling social atmosphere. Located at the iconic City-Shop in Highland | Iconic,Local Hotspot,Music,Karaoke | Nightlife | Highland | $$ | https://gcparksandresorts.github.io/gcresorthighland/destinations/city-shop/nytz-tavern | https://aeroclubbar.com/cdn/shop/files/aeroclub-home3.jpg?v=1660347261&width=1500";
	attractionItems[17] = "Ocean Village Marketplace | An outdoor mall near the beach featuring many local shops and eateries and a diverse foodcourt | Cultural,Iconic,Romantic,Outdoor,Foodie,Instagrammable | Food & Drink | Oceanside | $$ | "+quickLink+"?index=nan | https://sandiegomagazine.com/wp-content/uploads/2023/08/0472ac4697183e8c7f704cf72b36cf6f.jpg";
	attractionItems[18] = "Oldtown Farmer's Market | A weekly market setup in the heart of Oldtown's historic Brick District | Unique,Cultural,Artistic,Foodie,Local Hotspot,Historic | Shopping | Oldtown | $$ | "+quickLink+"?index=nan | https://fox5sandiego.com/wp-content/uploads/sites/15/2022/06/AdobeStock_151195269-e1655596229709.jpeg?w=2560&h=1440&crop=1";
	attractionItems[19] = "Oldtown Sunflower Fields | Over three acres of hillside covered in gorgeous local flowers | Unique,Iconic,Instagrammable,Scenic | Attractions | Oldtown | $ | "+quickLink+"?index=nan | https://media.cbs8.com/assets/KFMB/images/dcd8543f-57dd-487c-a309-828b390dcefd/dcd8543f-57dd-487c-a309-828b390dcefd_1140x641.jpg";
	attractionItems[20] = "Oras Nou College of Art and Literature | A world-class college and performance centers | Educational,Prestigious,Transit Accessible,Concerts,Art | Education & Learning | Newtown | Free | attraction_link | https://i.pinimg.com/736x/4d/7c/c1/4d7cc11eb0ef75b26bffb53b8b4723af.jpg";
	attractionItems[21] = "Oras Nou Convention Center | A world-famous center of events and festivals | Entertainment,Iconic,Transit Accessible,MDA Accessible | Art & Culture | Highland | $ | "+quickLink+"?index=nan | https://www.exhibitoronline.com/i/pr/ACCNorthExterior917c.jpg";
	attractionItems[22] = "Oras Nou Public Library | Massive library featured in iconic movie scenes | Historic,Iconic,Movies,Quiet,Unique | Education & Learning | Downtown | Free | "+quickLink+"?index=nan | https://cdn.thespaces.com/wp-content/uploads/2023/03/Bibliothe-que-nationale-de-france_HERO.jpg";
	attractionItems[23] = "Oras Nou STAGE | Famous outdoor concert venue overlooking Riverwood | Transit-Accessible,Live-Entertainment,Concerts,Iconic | Entertainment | Highland | $$ | "+quickLink+"?index=4 | https://ca-times.brightspotcdn.com/dims4/default/d230055/2147483647/strip/true/crop/800x420+0+44/resize/1200x630!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F50%2Fff%2F40081cbf4c2498e7212c9788b84c%2F1953.jpg";
	attractionItems[24] = "Oras Nou Zoo | Minecraftia's largest Zoo and Environmental Studies Facility | Educational,Nature,Outdoors,All-Day,Wildlife | Attractions | Newtown | $$ | "+quickLink+"?index=11 | https://www.9minecraft.net/wp-content/uploads/2022/03/All-Animal-Zoo-Screenshots-1.jpg";
	attractionItems[25] = "Quartz City-Center Mall | An enormous shopping, dining, entertainment, and more complex in the heart of downtown | Local-Hotspot,Social,MDA-Accessible,Transit-Accessible | Shopping | Downtown | $$ | attraction_link | https://lamag.com/.image/t_share/MTk3NTU2MDc1OTEzNTUzNjAy/retail-district-level-2.jpg";
	attractionItems[26] = "Quartz Plaza | A multi-use outdoor venue located across the street from the Oras Nou Capitol | Local Hotspot,Entertainment,Music,Movies,Outdoor | Entertainment | Downtown | $$ | "+quickLink+"?index=5 | https://ca-times.brightspotcdn.com/dims4/default/b1eeb7b/2147483647/strip/true/crop/3800x2531+0+0/resize/1200x799!/quality/75/?url=https%3A%2F%2Fcalifornia-times.brightspot.s3.amazonaws.com%2F29%2Fc2%2F95a29dc2416b847f6924bfee14eb%2Fshell-spring2021-0036-1.jpg";
	attractionItems[27] = "Riverwood Hiking Trails and Recreation | Hike or bike through one of Minecraftia's most beautiful nature preserves | Adventure,Quiet,Active,Wildlife,Unique | Sports & Recreation | Northwood | Free | "+quickLink+"?index=nan | https://worldview.stratfor.com/sites/default/files/styles/2x1_full/public/main/images/indus-water.jpg?itok=C2sURqX2";
	attractionItems[28] = "Riverwood Road | An iconic drive alongside and over the Riverwood nature preserve between Downtown and Highland | Unique,Relaxing,Iconic,Instagrammable,Adventure | Landmark | Northwood | Free | "+quickLink+"?index=nan | https://nztoday.co.nz/wp-content/uploads/2018/11/1-Waitaki-Valley-NZT83.jpg";
	attractionItems[29] = "Rose District | An enclave of art, love, and hummanity. Home to many queer art galleries, clubs, and restaurants | LGBTQ,Foodie,Cultural,Artistic,Unique,Local Hotspot,Outdoor,Transit Accessible,Karaoke | Art & Culture | Downtown | $ | "+quickLink+"?index=nan | https://a.cdn-hotels.com/gdcs/production112/d1468/a422fe92-c4e2-40e5-baba-f8591c32d177.jpg";
	attractionItems[30] = "Sunvalley Bridge | A scenic overlook crossing the Riverwood valley | Scenic,Unique,Free,Quiet,Iconic,Instagrammable | Attraction | Downtown | Free | attractions/sunvalley-bridge | https://www.indianriverbridge.com/wp-content/uploads/image.png";
	attractionItems[31] = "Sussman Performing Arts Center | Part of the Oras Nou College of Art and Literature campus | Music,Entertainment,Cultural,Broadway | Art & Culture | Newtown | $$ | "+quickLink+"?index=7 | https://theatreprojects.com/wp-content/uploads/2022/04/ahmanson-theatre-01.jpg";
	attractionItems[32] = "The Aztech Theater | Prestigious theater home to the Minecraftian Academy Awards for Cinema and many broadway productions and movie premiers | Cultural,Entertainment,Instagrammable,Prestigious,Iconic,Broadway | Art & Culture | Highland | $$$ | "+quickLink+"?index=6 | https://www.historictheatrephotos.com/Resources/Theatre-Photos/Dolby-Los-Angeles/Photos/Auditorium/First_Mezzanine_Center.jpg";
	attractionItems[33] = "The Casa de Cafe Experience | Tour the Casa De Cafe production facility and try experimental food and beverages | Foodie,Unique | Food & Drink | Industrial City | $$ | "+quickLink+"?index=nan | https://assets.vogue.com/photos/5a270de4f73bec258189118b/master/w_2560%2Cc_limit/01-story-image-new-largest-starbucks-coffee-roastery-shanghai.jpg";
	attractionItems[34] = "The Rose Petal | Cozy and well-known concert venue + bar located in the heart of the Rose District. Famous for being the birthplace of many famous musicians | Music,LGBTQ,Local Hotspot,Entertainment,Iconic | Entertainment | Downtown | $ | "+quickLink+"?index=3 | https://d3i6fh83elv35t.cloudfront.net/static/2023/07/Hot-Chip-at-The-Atlantis-3-Photo-by-Troy-Gerhardt-1024x683.jpg";
	attractionItems[35] = "Themepark Cafe | A themed restaurant featuring unique dining areas | Unique,Local-Hotspot,Themed,Instagrammable | Food & Drink | Northwood | $$ | attraction_link | https://www.davidthemingworks.com/EN/images/THE-CAVE-THEME-PARK-RESTAURANT--8-_3wa5c5ed.jpg";
	attractionItems[36] = "University of Minecraftia Oras Nou | A prestigious university campus and medical center | Educational,Prestigious,Transit Accessible | Education & Learning | Downtown | Free | attraction_link | https://i.imgur.com/84Iq0cb.jpg";
	attractionItems[37] = "Exposition Sky Tower | A testament to Oras Nou's sky-moving future. Part of Exposition Park, a complex of museums and art centers | Instagrammable,Scenic,Romantic,Iconic | Attractions | Downtown | $ | "+quickLink+"?index=15 | https://www.seattleattractions.com/wp-content/uploads/elementor/thumbs/seattle-space-needle-seattle-premier-attractions-q6m1jagg73qifercq2njo2805obwg78cu9nledb3ig.jpg";
	attractionItems[38] = "Little Tokyo District | A small enclave of Japanese culture, architecture, and food. Netled between Downtown and Oceanside | Historic,Romantic,Cultural,Foodie,Unique,Beach Access,Local Hotspot | Art & Culture | Oceanside | Free | "+quickLink+"?index=nan | https://images.prismic.io/bounce/adc8384b-6462-45fb-b0ff-0e423e4267c8_nong-v-ab5sWmOsPT4-unsplash.jpg?auto=compress%2Cformat&ar=1.7%3A1&fit=crop";
	attractionItems[39] = "Little Tokyo Tower Hotel | A culturally rich and asthetic hotel overlooking the iconic Little Tokyo District | Iconic,Unique,Romantic,Relaxing,Cultural,Scenic | Attractions | Oceanside | $$$ | "+quickLink+"?index=nan | https://media.cntraveler.com/photos/53dad1726dec627b14a04e2d/master/pass/new-otani-tokyo-tokyo-japan-108908-1.jpg";
	attractionItems[40] = "City-Shop at the Globe-City Resort Highland | A unique shopping and dining experience with state-of-the art audio visual technology | Iconic,Local Hotspot,Entertainment,Foodie,Outdoor | Shopping | Highland | $$ | https://gcparksandresorts.github.io/gcresorthighland/destinations/city-shop | https://gcparksandresorts.github.io/gcresorthighland/webresources/images/banners/cityshopBanner.jpg";
	attractionItems[41] = "Jacob's on Rose | A popular club in the Rose District featuring karaoke, drag shows, good vibes, and a whole lotta fun! | LGBTQ,Music,Local Hotspot,Karaoke | Nightlife | Downtown | $ | "+quickLink+"?index=15 | https://magprod2-1a27b.kxcdn.com/wp-content/uploads/2022/08/@richssd_Facebook1.jpg";
	attractionItems[42] = "The Mystique - Circular Theater | A very unique performance space featuring a circular stage surrounded by seating | Entertainment,Unique,Iconic,Cultural,Music,Concerts | Entertainment | Downtown | $$ | "+quickLink+"?index=10 | https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/50609/article_aligned%402x.jpg";
	attractionItems[43] = "The Industrial Complex | A popular and iconic nightclub located in an abandonded factory | Local Hotspot,Adult Oriented,21+,Entertainment,Music,Unique,Iconic | Nightlife | Industrial City | $$ | "+quickLink+"?index=12 | https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2017/05/24/010b21a8-c883-4f51-9d6c-519fb132f65e/printworks";
