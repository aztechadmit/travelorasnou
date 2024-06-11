attractionPageTitle = []; // Title of the page to display
attractionPageDescription = []; // Summary of the Attraction / What it is
attractionPageMore = []; // More general information - not necessary (if blank section will be ommited)
attractionPageTags = []; // Tags pertaining to this attraction

attractionPageBanner = []; // Image link for the banner of the page
attractionPageImages = []; // List of two image links

attractionPageLink = []; // Link to the official website of this attraction
attractionPageSimilar = []; // Input the category of this attraction to search for similar ones
attractionSeeAlso = []; // Links other related attractions - will show as hyperlinks (or buttons idk yet)

attractionCategory = ["none", "Art & Culture", "Attractions", "Business & Innovation", "Education & Learning", "Entertainment", "Food & Drink", "Nightlife", 
			      "Shopping", "Sports & Recreation", "Wellness & Relaxation"];

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
	attractionPageTags[7] = "Cultural,Entertainment,Instagrammable,Prestigious,Iconic,Broadway";

 	attractionPageLink[7] = "nan";
  	attractionPageSimilar[7] = "Art & Culture | Newtown";
   	attractionSeeAlso[7] = "The Aztech Theater | attraction?index=6 || Lea Kra Sasson Concert Hall | attraction?index=8 || Oras Nou STAGE | attraction?index=4";
 
 	attractionPageBanner[7] = "https://theatreprojects.com/wp-content/uploads/2022/04/ahmanson-theatre-01.jpg";
  	attractionPageImages[7] = "https://images.squarespace-cdn.com/content/v1/52ee7adbe4b00067fb62832a/1527386565971-6NBYGAIYR3EM62ZU9TAT/ahmanson_stage.jpg | https://southpasadenan.com/wp-content/uploads/south-pasadena-news-12-11-2023-a-christmas-story-the-ahmanson-04.jpg | https://res.cloudinary.com/dv3qcy9ay/image/upload/c_fill,f_auto,g_auto,h_630,q_90,w_1200/v1/2023-2024/Prod_ACS/Slideshow/CSM300.jpg";

   	/* ----	IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */

	attractionPageTitle[8] = "Lea Kra Sasson Concert Hall";
	attractionPageDescription[8] = "A gorgeous and prestegious concert hall. Home to the Oras Nou Harmonic Orchestra and the site of many awe-inspiring musical performances, operas, and delightful displays of art. The LKS Concert Hall is located in the famous <em>Exposition Park</em> in Downtown, a campus full of art, history, and innovation.";
	attractionPageMore[8] = "The LKS Concert Hall is a historic testement to the prestegious Art & Culture scene in Oras Nou. It is an integral part of <b>Exposition Park</b> in Downtown, a large campus home to many museums, art galleries, expo halls, and learning centers. This massive concert hall was designed by famed architect Jaxton Waxkie and is the perfect compliment to impactful and heart-pounding musical performances.";
	attractionPageTags[8] = "Cultural,Entertainment,Instagrammable,Prestigious,Iconic,Learning,Music";

 	attractionPageLink[8] = "nan";
  	attractionPageSimilar[8] = "Art & Culture | Downtown";
   	attractionSeeAlso[8] = "The Mystique | attraction?index=10 || Sussman Performing Arts Center | attraction?index=7 || The Aztech Theater | attraction?index=6";
 
 	attractionPageBanner[8] = "https://media.timeout.com/images/101758989/750/422/image.jpg";
  	attractionPageImages[8] = "https://metropolismag.com/wp-content/uploads/2021/08/Shanghai_CourtesyChenHao.jpg | https://static01.nyt.com/images/2021/10/13/arts/12concerthall-1/12concerthall-1-videoSixteenByNineJumbo1600.jpg | https://ucarecdn.com/9aa5c3fb-1595-4dd5-a8b4-eb5d5e86416b/";

   	/* ----	IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */

	attractionPageTitle[9] = "Industries Stadium";
	attractionPageDescription[9] = "The 2nd largest stadium in Minecraftia, part of the world famous <em>Stadium Center Complex</em> featuring the stadium, Oras Nou STAGE, team offices, and more.";
	attractionPageMore[9] = "Industries Stadium is one of the most advanced and eye-catching sporting facilities. Currently, the stadium is home to the Eastpoint Panties soccer AND the Footlong Fockers football teams. The stadium also hosts countless large-scale concerts and events.<p>With a max seating capacity of 50000, Industries Stadium is the 2nd largest sporting facility in the entire country of Minecraftia and a daring leap towards the advancement of sporting and entertainment!</p>";
	attractionPageTags[9] = "Sports,Iconic,Transit Accessible,Entertainment";

 	attractionPageLink[9] = "nan";
  	attractionPageSimilar[9] = "Sports & Recreation | Highland";
   	attractionSeeAlso[9] = "Diamond Center Stadium | attraction?index=11 || Oras Nou STAGE | attraction?index=4";
 
 	attractionPageBanner[9] = "https://i.redd.it/i-built-this-football-stadium-for-my-minecraft-city-what-do-v0-xbgibw3xc32a1.png?width=1280&format=png&auto=webp&s=565de0e8ac3d98776fc4ba1b0e70636db820b0b5";
  	attractionPageImages[9] = "https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Fi-built-this-football-stadium-for-my-minecraft-city-what-do-v0-r1orno0xc32a1.png%3Fwidth%3D1280%26format%3Dpng%26auto%3Dwebp%26s%3Dc001360bfe9a50eea4673b1362526db3721d1938 | https://preview.redd.it/i-built-this-football-stadium-for-my-minecraft-city-what-do-v0-1bumgtwwc32a1.png?width=1080&crop=smart&auto=webp&s=49b1a73767366c6ec7f9befe1d4c794f70be8025";

   	/* ----	IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */

	attractionPageTitle[10] = "The Mystique - Circular Theater";
	attractionPageDescription[10] = "A unique circular theater where the audience surrounds the stage for an intimate 360 degree viewing experience. Located in Downtown's <em>Exposition Park</em>, an iconic campus featuring theaters, museums, art galleries, and expo halls.";
	attractionPageMore[10] = "The Mystique has a history rooted in Oras Nou's arts scene. The theater was originally constructed in 2001 to host <em>Mystique de Los Jentes del Sol</em>, an awe-inspiring musical and visual performance by the Circus Minecraftian company. The show ran for 5 years before deciding to travel the world. Now, the theater is home to dozens of performances, concerts, and speakers which take full advantage of its unique design.";
	attractionPageTags[10] = "Entertainment,Unique,Iconic,Cultural,Music,Concerts";

 	attractionPageLink[10] = "nan";
  	attractionPageSimilar[10] = "Entertainment | Downtown";
   	attractionSeeAlso[10] = "Lea Kra Sasson Concert Hall | attraction?index=8 || Sussman Performing Arts Center | attraction?index=7 || The Aztech Theater | attraction?index=6";
 
 	attractionPageBanner[10] = "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/50609/article_aligned%402x.jpg";
  	attractionPageImages[10] = "https://www.newcitystage.com/wp-content/uploads/2023/06/Buddy-1.jpg | https://www.newcitystage.com/wp-content/uploads/2019/09/6CTRTUHFPZFQHF44N2OX37UOEA.jpg | https://i.pinimg.com/originals/f8/a1/8f/f8a18fbdcdac24c8b2855b844db9a6e6.jpg";

   	/* ----	IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */

	attractionPageTitle[11] = "Oras Nou Zoo";
	attractionPageDescription[11] = "It's more than a zoo, the Oras Nou Zoo is a deep-dive into the astounding natural world. Featuring unique themed rides, exotic and elaborate exhibits, sustainablility teaching, and educational connections, your ultimate natural experience awaits!";
	attractionPageMore[11] = "The Oras Nou zoo is home to over 300 different species of animals and dozens of unique interactive exhibits. Gaze in awe at the glory of nature in a medium which does little to take away from natural un-touched beauty. The Oras Nou zoo is an important member of the Minecraftian Association for Wildlife and Nature (MAWN) and partners with the prestegious Burke Research Institute to further improve our knowlege of the natural world.";
	attractionPageTags[11] = "Family Oriented,Adventure,Scenic,Educational,Wildlife,Transit Accessible,MDA Accessible,Outdoor,All-day";

 	attractionPageLink[11] = "nan";
  	attractionPageSimilar[11] = "Attractions | Newtown";
   	attractionSeeAlso[11] = "Globe-City's Adventure Park | attraction?index=0 || The Bautista Aquarium of Oceanside | attraction?index=1";
 
 	attractionPageBanner[11] = "https://media.nbcsandiego.com/2019/09/San-Diego-Zoo-entrance-generic-61020.jpg?quality=85&strip=all&resize=1200%2C675";
  	attractionPageImages[11] = "https://www.usatoday.com/gcdn/media/2019/08/12/USATODAY/usatsports/gettyimages-474690025.jpg?width=1200&disable=upscale&format=pjpg&auto=webp | https://offloadmedia.feverup.com/secretldn.com/wp-content/uploads/2022/08/25135907/g70f4baf2763e53b2299d98f45e53977620e5f29ffd251690be4fe40efc1cc3dc20ca8daab5df6faf1ed5170281566d08ff46a884c7aee9c2884900034f7af11a_1280.jpg | https://www.sandiego.org/-/media/images/sdta-site/things-to-do/attractions/san-diego-attractions/seaworld-sd.jpg?h=500&la=en&w=600";

   	/* ----	IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */

	attractionPageTitle[12] = "The Industrial Complex";
	attractionPageDescription[12] = "A popular nightclub and bar located in an abandonded factory in Industrial City. The club boasts private rooms, hot tubs, bars, dance floors, a tall terrace, and an electric atmosphere. The club is open Monday, Wednesday, and Friday and each night features a new theme.";
	attractionPageMore[12] = "TIC is located inside what used to be a natural-gas powered cold-storage facility opened in 1983. In 2003, the facility went bankrupt and shuttered its doors permanenetly after more modern and clean-air cold-storage facilities opened in the nearby industrial area. In 2015, The Industrial City counsel reclaimed the facility, backed by the recently established <em>Oras Nou Realestate Abandonment Clause*</em>, and sold off it's interior. In 2018 the building was sold to a wealthy developer who re-imagined it into The Industrial Complex club, finally opened in 2019. Today, the club sees nearly 1000 guests during its nightly operation and hosts some of the hottest DJs in Minecraftia. <p style='color:gray; font-size:12px;'>* This clause was introduced in 2010 and states that land-owners have 5.5 years to repurpose or sell abandonded and unused buildings before the responsible district counsel has legal right to repurpose the land. This was a meeasure aimed to make better use of abandoned and unused land in an ever-expanding city.</p>";
	attractionPageTags[12] = "Unique,Local Hotspot,Iconic,Prestegious,Instagrammable,Entertainment,Music,Adult Oriented,21+";

 	attractionPageLink[12] = "nan";
  	attractionPageSimilar[12] = "Nightlife | Industrial City";
   	attractionSeeAlso[12] = "Club Nou | first_link || Jacob's On Rose | second_link";
 
 	attractionPageBanner[12] = "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2017/05/24/010b21a8-c883-4f51-9d6c-519fb132f65e/printworks";
  	attractionPageImages[12] = "https://cloudinary-assets.dostuffmedia.com/res/dostuff-media/image/upload/venue-298916/1405106700.jpg | https://img.redbull.com/images/q_auto,f_auto/redbullcom/2017/05/24/fc6bcf12-07ec-4cf5-82d4-a5416110e84b/printworks | https://vintageindustrialstyle.com/wp-content/uploads/2014/12/Examples-of-Modern-Light-Fixtures-for-NightClubs-3.jpg";

   	/* ----	IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */

	attractionPageTitle[13] = "Highland Studios";
	attractionPageDescription[13] = "Minecraftia's largest movie studio. Home to some of the most filmed sets, studios, and lots and the backdrop of many of your favorite movies! Jump right into the movies on the <a>Highland Studios Tour</a> taking you through enormous sound stages, famous TV sets, and a mini-neighborhood built for the camera.";
	attractionPageMore[13] = "Highland Studios stands as a testement to the history of filmmaking in Oras Nou. It was the first, and now the largest, movie studio in the nation and boasts over 15 soundstages. The studio has been the backdrop of many famous movies and blockbusters as well as music videos and other media. Today over 25 film companies lease out office spaces within the studio and dozens of movies are shot here every month!";
	attractionPageTags[13] = "Movies,Iconic,Outdoor";

 	attractionPageLink[13] = "nan";
  	attractionPageSimilar[13] = "Attractions | Highland";
   	attractionSeeAlso[13] = "Highland Walk of Stars | attraction?index=14 || The Aztech Theater | attraction?index=6 || Oras Nou STAGE | attraction?index=4";
 
 	attractionPageBanner[13] = "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2019-04/1d9024c65063202d43bdfac0e073dab6.jpeg?h=c1692a99&itok=Ts8Ejha7";
  	attractionPageImages[13] = "https://www.creativetravelguide.com/wp-content/uploads/2016/11/warner-brothers-studio-tour2-728x410.jpg | https://images.ctfassets.net/twizyp0t114t/4eED5AtyJwZBIooVozuYMw/3f2addc8bd4cabbed6e300bf75b70e50/Walks_Harry_Potter_Studio_Tour_WEB_RES_0009_Copyrighted.jpg?fm=webp&w=600&h=400&q=90&fit=pad&f=center&bg=rgb:000000";

   	/* ----	IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */

	attractionPageTitle[14] = "Highland Walk of Stars";
	attractionPageDescription[14] = "Walk in the footsteps of famous faces from movies, music, and television. This over 1/2 mile stretch of magic features iconic attractions centered around the film and music industry as well as sidewikes adorned with plaques dedicated to some of the most influential names.";
	attractionPageMore[14] = "The Highland Walk of Stars is named after the iconic stars carved into its sidewalk adorned with the names of influentual people across the world. This bustling stretch of magic features the iconic Aztech Theater, The Highland Hotel, many movie and music attractions, galleries, and more. It's your one-stop-shop to explore all your favorite movies, musicians, celebrites, and magical worlds. <h4>Walking Tours</h4><p>If you like to explore on foot, enjoy walking down large sidewalks on a self-guided tour of the boulevard. Download the <a>GO-O.N.</a> app for an augmented reality tour with enhanced visuals and visual guides to the magic.</p><h4>Driving Tours</h4><p>If you'd like to see the sights from greater heights, book a deck-bus tour through Highland with countless tour companies such as <a>Hollywood in Nou Travel LLC.</a></p>";
	attractionPageTags[14] = "Movies,Iconic,Outdoor,Unique,Broadway";

 	attractionPageLink[14] = "nan";
  	attractionPageSimilar[14] = "Attractions | Highland";
   	attractionSeeAlso[14] = "Highland Studios | attraction?index=13 || The Aztech Theater | attraction?index=6 || Oras Nou STAGE | attraction?index=4";
 
 	attractionPageBanner[14] = "https://www.introducinglosangeles.com/f/estados-unidos/los-angeles/guia/hollywood-boulevard-m.jpg";
  	attractionPageImages[14] = "https://www.explore.com/img/gallery/your-guide-to-the-hollywood-walk-of-fame/intro-1677259806.jpg | https://cdn.prod.website-files.com/660332e04a42ee42011d9a2b/660332e04a42ee42011d9dbc_Blog%20-%20Hollywood%20Sign.jpg | https://traveler.marriott.com/wp-content/uploads/2016/07/ALMY_FTD9AK_HollywoodBlvd.jpg";

   	/* ----	IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */

	attractionPageTitle[15] = "Jacob's on Rose";
	attractionPageDescription[15] = "A fun, quirky, and all around great place to be! Jacob's on Rose is a happy little bar and club located on the fabulous Rose Avenue. This club features kareoke, great drinks, awesome vibes, pool, boardgames, and fun people! Whether your LGBTQ+ or an ally, come and enjoy some paradise.";
	attractionPageMore[15] = "Bring your friends, or come to make new ones! Jacob's on Rose is a local hotspot featuring banging music, awesome vibes, and an atmosphere full of fun. Open every night (except sunday), this popping club features a bustling dance floor, a quiet loft, and a rooftop terrace overlooking Rose Avenue. Whether you're here to party, make out with strangers, show off your moves, or literally anything else, come and do it at Jacob's!";
	attractionPageTags[15] = "LGBTQ,Adult Oriented,Karaoke,Music,Local Hotspot,21+";

 	attractionPageLink[15] = "nan";
  	attractionPageSimilar[15] = "Nightlife | Downtown";
   	attractionSeeAlso[15] = "The Industrial Complex | attraction?index=12 || Club Nou | attraction?index=nan || The Rose District | place?index=0";
 
 	attractionPageBanner[15] = "https://magprod2-1a27b.kxcdn.com/wp-content/uploads/2022/08/@richssd_Facebook1.jpg";
  	attractionPageImages[15] = "https://resizer.otstatic.com/v2/photos/wide-huge/4/31137703.jpg | https://vicevibe.com/wp-content/uploads/2019/05/Richs-San-Diego-6.png | https://cdn.vor.us/profile/3481162/og/accc4c4b01ba4958b6cce33a83e3f4c7.image!jpeg.525295.jpg.46213192_2130095793709676_3438686478014611456_n.jpg";

   	/* ----	IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */

	attractionPageTitle[16] = "Oras Nou AeroTower";
	attractionPageDescription[16] = "Standing at nearly 200 meters (650 ft) tall, the Oras Nou AeroTower is a jaw-dropping landmark and testiment to Oras Nou's forward-thinking and futuristic design. The tower was constructed in 1985 as part of a donation from the Minecraftian Association for Better Cities and was dsesigned to be a symbol of Oras Nou's people-centric and futuristic design.";
	attractionPageMore[16] = "Capture the city of the future from above as you soar to 200 meters. The AeroTower features multiple outdoor and indoor observation decks, a magical rotating bar at 120 meters, an interactive museum, and more! If the elevator sounds boring, try climbing over 50 flights of stairs on your way to the top, entirely on the exterior of the main elevator shaft. <h4>A Journey Upwards</h4>In the elevator up to the observation platform, learn about the history of the tower and watch it be constructed around you in a unique 360 degree visual experience, designed by Painter Creative and Mystique Visuals.<h4>The Science of Height</h4>At 200 meters tall, the AeroTower is packed full of innovative technology which keeps this skinny tower upright against strong winds, earthquakes, and gravity. At the towers base, explore an interactive exhibit which teaches about this technology and the construction of this marvelous monument.";
	attractionPageTags[16] = "Unique,Instagrammable,Scenic,Iconic,Learning";

 	attractionPageLink[16] = "nan";
  	attractionPageSimilar[16] = "Attractions | Downtown";
   	attractionSeeAlso[16] = "Exposition Park, Downtown | place?index=1 || The Mystique - Circular Theater | attraction?index=10";
 
 	attractionPageBanner[16] = "https://www.burientoyota.com/blogs/2317/wp-content/uploads/2019/03/space-needle.jpg";
  	attractionPageImages[16] = "https://i.pinimg.com/736x/c6/9e/e9/c69ee9a881617c4d23729a1800e5464a.jpg | https://www.edgewaterhotel.com///wp-content/uploads/2020/01/Space-Needle-at-Night-hero.jpg | https://media.architecturaldigest.com/photos/5afc411fda68792ef45e524b/16:9/w_2560%2Cc_limit/GettyImages-133955724.jpg";

   	/* ----	IF NO VALUE FOR ELEMENT, USE "nan" ----------------------------------------------------------------------------------------- */

	
