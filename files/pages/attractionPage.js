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
   	attractionSeeAlso[2] = "Globe-City Adventure Park | attraction?index=0 || Mini-Park Oceanside | https://aztechadmit.github.io/travelorasnou/things-to-do/pages/attraction?index=0";
 
 	attractionPageBanner[2] = "https://costar.brightspotcdn.com/dims4/default/ea42302/2147483647/strip/true/crop/2100x1400+0+0/resize/2100x1400!/quality/100/?url=http%3A%2F%2Fcostar-brightspot.s3.us-east-1.amazonaws.com%2Fe9%2F43%2F8a18790240a4b23be1e39df63724%2Fcarowinds.jpg";
  	attractionPageImages[2] = "https://npr.brightspotcdn.com/31/56/688fb68b4215ad233a6a57835d5c/rollercoaster-north-carolina-23184750648493.jpg | https://travel.usnews.com/images/rollercoaster-rides-amusement-park-sky.jpg | https://b2290346.smushcdn.com/2290346/wp-content/uploads/2022/04/E10430A3-DBBE-4705-BB8D-4266EBBDE296-scaled.jpeg?lossy=2&strip=1&webp=1";

   	/* ----	IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */

	attractionPageTitle[3] = "The Rose Petal";
	attractionPageDescription[3] = "A lively indie concert venue in Downtown's Rose District, The Rose Petal also boasts a bar with tasty snacks and drinks to enjoy during the show.";
	attractionPageMore[3] = "The Rose Petal is an iconic concert venue located in the heart of Oras Nou's vibrant Rose District. Renowned as the birthplace of many famous Minecraftian musicians, comedians, drag queens, and more, it’s a spiritual haven where anything can happen. Over its 9+ year lifespan, The Rose Petal has hosted thousands of unforgettable performances, establishing itself as a cornerstone of the arts community. Despite numerous refurbishments and improvements, the venue's unique character and charm remain intact, continuing to inspire both artists and audiences alike.";
	attractionPageTags[3] = "Music,LGBTQ,Local Hotspot,Entertainment,Iconic";

 	attractionPageLink[3] = "nan";
  	attractionPageSimilar[3] = "Entertainment | Downtown";
   	attractionSeeAlso[3] = "Oras Nou STAGE | attraction?index=4 || Quartz Plaza | attraction?index=5";
 
 	attractionPageBanner[3] = "https://d3i6fh83elv35t.cloudfront.net/static/2023/07/Hot-Chip-at-The-Atlantis-3-Photo-by-Troy-Gerhardt-1024x683.jpg";
  	attractionPageImages[3] = "https://www.billboard.com/wp-content/uploads/2022/08/Dave-Grohl-of-Foo-Fighters-2022-billboard-1548.jpg?w=942&h=623&crop=1 | https://i.redd.it/atlantis-post-show-update-amazing-all-around-the-sound-was-v0-y4wlynxf5q2b1.jpg?width=4032&format=pjpg&auto=webp&s=fe905fa896753de60abbb1de55c5946f27b83e59 | https://seattlemusicinsider.com/wp-content/uploads/2023/10/nggallery_import/Nightly-@-Neumos-10-18-23-6.jpg";

   	/* ----	IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */

	attractionPageTitle[4] = "Oras Nou STAGE";
	attractionPageDescription[4] = "The Oras Nou STAGE is an iconic outdoor concert venue nestled in the breathtaking Highland area of Oras Nou. It is part of the famous Highland Stadium Complex which also includes Industries Stadium. Similar in grandeur and atmosphere to the renowned Hollywood Bowl, this massive venue offers a unique concert-going experience with its dramatic cliffside setting and picturesque river valley backdrop.";
	attractionPageMore[4] = "From cultural festivals to special events, the STAGE is the perfect venue for a wide range of large-scale gatherings. With its state-of-the-art sound and lighting systems, the Oras Nou STAGE ensures that every event is a sensory delight. Whether you’re attending a concert, a movie premiere, or a grand festival, the STAGE provides an unparalleled setting that combines natural beauty with world-class entertainment.";
	attractionPageTags[4] = "Transit Accessible,Entertainment,Concerts,Iconic,Outdoor";

 	attractionPageLink[4] = "nan";
  	attractionPageSimilar[4] = "Entertainment | Highland";
   	attractionSeeAlso[4] = "The Rose Petal | attraction?index=3 || Quartz Plaza | attraction?index=5 || Industries Stadium | attraction?index=9";
 
 	attractionPageBanner[4] = "https://ucarecdn.com/8ae9952d-6848-4d2a-9b5b-69c5578c2e9d/";
  	attractionPageImages[4] = "https://ucarecdn.com/fc320d82-8ef1-4378-b8e5-49275c9ea599/webfireworks_1_RGB.jpg | https://ca-times.brightspotcdn.com/dims4/default/d230055/2147483647/strip/true/crop/800x420+0+44/resize/1200x630!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F50%2Fff%2F40081cbf4c2498e7212c9788b84c%2F1953.jpg | https://ca-times.brightspotcdn.com/dims4/default/61f2de0/2147483647/strip/true/crop/3566x2377+217+0/resize/2000x1333!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fe1%2Fb9%2Fcfb815c84217ba235b0e481f633d%2Fla-photos-1staff-769563-la-et-hollywood-bowl-reopening-48-als.jpg";

   	/* ----	IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */

	attractionPageTitle[5] = "Quartz Plaza";
	attractionPageDescription[5] = "Quartz Plaza is a versatile outdoor festival and concert venue situated in the iconic Capitol Park area of Downtown Oras Nou. This dynamic space is home to a variety of events, including concerts, movie festivals, charity gatherings, and night markets.";
	attractionPageMore[5] = "There's alot going on at Quartz Plaza! Home to the nationwide charity concert: <em>Nou Live</em>, a televised concert featuring top musicians from the year. In addition, Enjoy live music from local and international artists in a vibrant outdoor setting and watch films under the stars during our themed movie nights and festivals.<p>Every weekend, the plaza also features a <b>night market</b> where you can explore eclectic stalls and savor delicious street food with performances from local culture artists.</p>";
	attractionPageTags[5] = "Transit Accessible,Entertainment,Concerts,Iconic,Outdoor,Music,Movies";

 	attractionPageLink[5] = "nan";
  	attractionPageSimilar[5] = "Entertainment | Downtown";
   	attractionSeeAlso[5] = "The Rose Petal | attraction?index=3 || Oras Nou STAGE | attraction?index=4";
 
 	attractionPageBanner[5] = "https://www.laparent.com/wp-content/uploads/2021/08/4-credit_-Jenna-Selby-_-San-Diego-Symphony.jpg";
  	attractionPageImages[5] = "https://www.halfmooninn.com/blog/wp-content/uploads/2021/07/6HMIByTheBay.jpg | https://www.sfcv.org/sites/default/files/styles/full_width_content_870x/public/media/images/2021-08/rady_shell_projections_0.jpeg?itok=9Ewczy4_";

   	/* ----	IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */

	attractionPageTitle[6] = "The Aztech Theater";
	attractionPageDescription[6] = "A prestegious and well-televised performance stage and cinema home to the renowned Academy Awards for motion picture. This theater has also been home to many large scale broadway productions and movie premiers.";
	attractionPageMore[6] = "Renowned as the home of the Academy Awards®, the Aztech Theater® is a 180,000-square-foot, 3,400-seat cinema and performance stage, celebrating our commitment to science and innovation. Guests at this special events venue are able to experience films with the ultravivid color of Aztech PureView® technology and the immersive sound of Aztech Audio®. PureView® looks more like real life, with darker darks, lighter lights, and a remarkable color range. Aztech Audio creates a multidimensional soundscape with sounds that can be placed anywhere in the cinema including overhead. In fact, the Dolby Theatre has 215 individually powered speakers enabled with Aztech Audio, making it one of the most sophisticated sound systems in the world. We've been working with talented filmmakers to create unforgettable movie experiences for more than 10 years. From the cinema to the living room, Aztech Technologies continues to transform the entertainment experience, and the Aztech Theatre reflects our ongoing commitment to help moviemakers realize their visions.";
	attractionPageTags[6] = "Cultural,Entertainment,Instagrammable,Prestigious,Iconic,Broadway";

 	attractionPageLink[6] = "nan";
  	attractionPageSimilar[6] = "Art & Culture | Highland";
   	attractionSeeAlso[6] = "Lea Kra Sasson Concert Hall | attraction?index=8 || Sussman Performing Arts Center | attraction?index=7";
 
 	attractionPageBanner[6] = "https://www.historictheatrephotos.com/Resources/Theatre-Photos/Dolby-Los-Angeles/Photos/Auditorium/First_Mezzanine_Center.jpg";
  	attractionPageImages[6] = "https://www.dolbytheatre.com/assets/ShowPro/gallery/photo/_resampled/ScaleWidthWyI1MDAiXQ/gallery-1-large2.jpg | https://ca-times.brightspotcdn.com/dims4/default/cfc3aa1/2147483647/strip/true/crop/5036x3357+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fa2%2F70%2Fa880531f43f8b7bbe4c1925ec72f%2Fla-photos-1staff-488196-et-oscars-show-rcg-0839-739657-739900.JPG | https://media.architecturaldigest.com/photos/623c9610156fa77bad1dd50b/16:9/w_1280,c_limit/Oscars%20rendering%202022%20by%20David%20Korins%20.jpg";

   	/* ----	IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */

	attractionPageTitle[7] = "Sussman Performing Arts Center";
	attractionPageDescription[7] = "A technologically advanced and high-end performing arts theater featuring many local productions, musicals, and small-scale broadway productions. Part of the Oras Nou College of Art & Literature campus.";
	attractionPageMore[7] = "The SPAC was part of a large donation to the Oras Nou College of Art & Literature by the Kra Sasson Gallery. Since its opening, the high-tech and classy theater has welcomed numerous local productions from artists at the university as well as small theater groups across Minecraftia. Now, the venue is also home to traveling broadway productions, popular musicals, and many displays of the wonderful art & culture of theater!";
	attractionPageTags[7] = "attraction_tags";

 	attractionPageLink[7] = "nan";
  	attractionPageSimilar[7] = "Art & Culture | Newtown";
   	attractionSeeAlso[7] = "The Aztech Theater | attraction?index=6 || Lea Kra Sasson Concert Hall | attraction?index=8 || Oras Nou STAGE | attraction?index=4";
 
 	attractionPageBanner[7] = "https://theatreprojects.com/wp-content/uploads/2022/04/ahmanson-theatre-01.jpg";
  	attractionPageImages[7] = "https://images.squarespace-cdn.com/content/v1/52ee7adbe4b00067fb62832a/1527386565971-6NBYGAIYR3EM62ZU9TAT/ahmanson_stage.jpg | https://southpasadenan.com/wp-content/uploads/south-pasadena-news-12-11-2023-a-christmas-story-the-ahmanson-04.jpg | https://res.cloudinary.com/dv3qcy9ay/image/upload/c_fill,f_auto,g_auto,h_630,q_90,w_1200/v1/2023-2024/Prod_ACS/Slideshow/CSM300.jpg";

   	/* ----	IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */

	attractionPageTitle[8] = "Lea Kra Sasson Concert Hall";
	attractionPageDescription[8] = "short_description";
	attractionPageMore[8] = "longer_description";
	attractionPageTags[8] = "attraction_tags";

 	attractionPageLink[8] = "nan";
  	attractionPageSimilar[8] = "attractio_search_category | attraction_location";
   	attractionSeeAlso[8] = "first_name | first_link || second_name | second_link";
 
 	attractionPageBanner[8] = "https://media.timeout.com/images/101758989/750/422/image.jpg";
  	attractionPageImages[8] = "image_link_one | image_link_two";

   	/* ----	IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */

	attractionPageTitle[9] = "Industries Stadium";
	attractionPageDescription[9] = "The 2nd largest stadium in Minecraftia, part of the world famous <em>Stadium Center Complex</em> featuring the stadium, Oras Nou STAGE, team offices, and more.";
	attractionPageMore[9] = "Industries Stadium is one of the most advanced and eye-catching sporting facilities. Currently, the stadium is home to the Eastpoint Panties soccer AND the Footlong Fockers football teams. The stadium also hosts countless large-scale concerts and events.<p>With a max seating capacity of 50000, Industries Stadium is the 2nd largest sporting facility in the entire country of Minecraftia and a daring leap towards the advancement of sporting and entertainment!</p>";
	attractionPageTags[9] = "Sports,Iconic,Transit Accessible,Entertainment";

 	attractionPageLink[9] = "nan";
  	attractionPageSimilar[9] = "Sports & Recreation | Highland";
   	attractionSeeAlso[9] = "Diamond Center Stadium | attraction?index=10 || Oras Nou STAGE | attraction?index=4";
 
 	attractionPageBanner[9] = "https://i.redd.it/i-built-this-football-stadium-for-my-minecraft-city-what-do-v0-xbgibw3xc32a1.png?width=1280&format=png&auto=webp&s=565de0e8ac3d98776fc4ba1b0e70636db820b0b5";
  	attractionPageImages[9] = "https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Fi-built-this-football-stadium-for-my-minecraft-city-what-do-v0-r1orno0xc32a1.png%3Fwidth%3D1280%26format%3Dpng%26auto%3Dwebp%26s%3Dc001360bfe9a50eea4673b1362526db3721d1938 | https://preview.redd.it/i-built-this-football-stadium-for-my-minecraft-city-what-do-v0-1bumgtwwc32a1.png?width=1080&crop=smart&auto=webp&s=49b1a73767366c6ec7f9befe1d4c794f70be8025";

   	/* ----	IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */
