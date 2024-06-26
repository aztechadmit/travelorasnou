const header = document.getElementById("header");
const footer = document.getElementById("footer");
const loader = document.getElementById("loader");

const linkHead = "https://aztechadmit.github.io/travelorasnou/";

function endPageLoad() {
	// Close the loader after delay num
	loader.style.opacity = 0;
  	setTimeout(function(){loader.style.display='none'},1000);
}

// Create the Header and Populate it Depending on Screen Size
function createHeader(){
	//console.clear();

	loader.innerHTML = "<div></div>";
	header.innerHTML = "<div id='headerSpacer'></div><div id='headerBar'></div><div id='closeMiniMenu' onclick='openMiniMenu(0)'></div>";

	const headerBar = document.getElementById("headerBar");

	if(window.innerWidth > 1000){

		headerBar.innerHTML = "<div id='headerContents'><img onclick='"+'window.open("https://aztechadmit.github.io/travelorasnou", "_self")'+"' src='https://gcparksandresorts.github.io/travelorasnou/files/images/logos/travelONlogo.png' id='headerLogo'></div><div id='headerMiniMenu'></div>";

		const headerContents = document.getElementById("headerContents");

		headerContents.innerHTML += "<a onmouseover='openMiniMenu(2)' style='cursor:default'>&#11206;</a> <a onmouseover='openMiniMenu(1)' style='cursor:default'>Vacation Planning</a> <a style='cursor:default' onmouseover='openMiniMenu(3)'>Things to Do</a> <a href='"+linkHead+"places-to-visit' onmouseover='openMiniMenu(0)'>Places to Visit</a>";
		
	}else{
		console.log("Minimized Header");
		headerBar.innerHTML = "<div id='headerContents'><img onclick='"+'window.open("https://aztechadmit.github.io/travelorasnou", "_self")'+"' src='https://gcparksandresorts.github.io/travelorasnou/files/images/logos/travelONlogo.png' id='headerLogo'> <a onclick='openHeaderMenu(1)' id='minHeadShow'>MENU</a></div><div id='miniHeaderMenu'></div>";
		const miniHeaderMenu = document.getElementById("miniHeaderMenu");
		
		/* SETUP MINI MENU */
		miniHeaderMenu.innerHTML = "<a href='https://aztechadmit.github.io/travelorasnou/places-to-visit'>Places to Visit</a> \
						<a onclick='openHeaderMenu(3)'>Things to Do</a> \
						<div id='thing-to-do-menu'><a style='color:orange' href='"+linkHead+"things-to-do'>Explore Oras Nou</a> <a  href='"+linkHead+"things-to-do/events'>Concerts & Events</a> <a href='"+linkHead+"things-to-do/places-to-eat'>Restaurants & Dining</a> <a href='"+linkHead+"things-to-do/attractions'>Attractions</a></div> \
						<a onclick='openHeaderMenu(4)'>Vacation Planning</a> \
						<div id='vacation-planning-menu'><a style='color:orange' href='"+linkHead+"vacation-planner'>Vacation Planner</a> <a href='"+linkHead+"articles/travel-guides'>Travel Guides & Information</a> <a href='"+linkHead+"places-to-stay'>Places to Stay</a> <a>Visitor Visas</a></div> \
						<a>More</a>";
	}
	createFooter();
}

var minOpen = 0;
window.onresize = function(){createHeader();};

// If small screen width, this menu will create the normal header elements inside the expandable menu
function openMiniMenu(num){
	const headerMiniMenu = document.getElementById("headerMiniMenu");
	const closerMe = document.getElementById("closeMiniMenu");
	switch(num){
		case 0:
			if(window.innerWidth <= 1000){
				closerMe.style.display = "none";
				openHeaderMenu(0);				
			}else if(minOpen != 0){
				headerMiniMenu.style.display = "none";
				closerMe.style.display = "none";
				minOpen = 0;
			}
			break;
		// 
		case 1:
			headerMiniMenu.style.textAlign = "right";
			headerMiniMenu.innerHTML = "<a style='color:orange'>Vacation Planner</a> <a href='"+linkHead+"articles/travel-guides'>Travel Guides and Information</a> <a>Getting Around Town</a> <a href='"+linkHead+"places-to-stay'>Places to Stay</a> <a>Visitor Visas</a>";
			headerMiniMenu.style.display = "block";
			closerMe.style.display = "block";
			minOpen = 1;
			break;
		case 2:
			headerMiniMenu.style.textAlign = "right";
			headerMiniMenu.innerHTML = "<a style='color:orange' href='"+linkHead+"articles/travel-guides'>Articles and Information</a> <a>Corporate Events</a> <a>Become a Resident</a>";
			headerMiniMenu.style.display = "block";
			closerMe.style.display = "block";
			minOpen = 2;
			break;
		case 3:
			headerMiniMenu.style.textAlign = "left";
			headerMiniMenu.innerHTML = "<a style='color:orange' href='"+linkHead+"things-to-do'>Explore Oras Nou</a> <a href='"+linkHead+"things-to-do/events'>Events and Festivals</a> <a href='"+linkHead+"things-to-do/places-to-eat'>Restaurants and Dining</a> <a href='"+linkHead+"things-to-do/attractions'>Attractions</a>";
			headerMiniMenu.style.display = "block";
			closerMe.style.display = "block";
			minOpen = 3;
			break;
	}// end of switch
}// end of openMiniMenu(num)
function openHeaderMenu(num){
	const miniHeaderMenu = document.getElementById("miniHeaderMenu");
	const minHeadShow = document.getElementById("minHeadShow");
	const closerMe = document.getElementById("closeMiniMenu");
	if(num == 0){
		miniHeaderMenu.style.display = "none";
		minHeadShow.innerHTML = "MENU";
	}else if(num == 1){
		if(miniHeaderMenu.style.display == "block"){
			miniHeaderMenu.style.display = "none";
			minHeadShow.innerHTML = "MENU";
		}else{
			minHeadShow.innerHTML = "CLOSE";
			miniHeaderMenu.style.display = "block";
			closerMe.style.display = "block";
		}
	}else if(num == 3){
		document.getElementById("thing-to-do-menu").style.display = 'block';
	}else if(num == 4){
		document.getElementById("vacation-planning-menu").style.display = 'block';
	}
}

// Create the Footer and Populate it
function createFooter(){
	// Copy and Past:   <a href='"+linkHead+"sublink/sublink2'>link_text</a>
	
	footer.innerHTML = "<br><div class='spacer'></div><div class='container' style='margin-bottom:0px;'><div class='footerLinks'>\
				<div> <h4>Information</h4> <a>Getting to Oras Nou</a> <a>Visitor Information</a> <a>Frequently Asked Questions</a> <a>Travel Alerts</a></div> \
				<div> <h4>Plan Your Visit</h4> <a href='"+linkHead+"articles/travel-guides/transportation'>Transportation</a> <a href='"+linkHead+"places-to-stay'>Hotels and Lodging</a> <a href='"+linkHead+"articles/travel-guides'>Travel Guides</a> <a>Corporate Meetings and Events</a></div> \
				<div> <h4>Explore</h4> <a href='"+linkHead+"things-to-do'>Things to Do</a> <a href='"+linkHead+"things-to-do/events'>Events and Festivals</a> <a>Clubbing and Nightlife</a> <a href='"+linkHead+"things-to-do/attractions?category=museums'>Museums and Exhibitions</a> <a href='"+linkHead+"things-to-do/attractions'>Attractions</a> </div> \
				<div> <h4>Oras Nou Territories</h4> <a href='"+linkHead+"places-to-visit/territories/city-of-oras-nou'>City of Oras Nou</a> <a href='"+linkHead+"places-to-visit/territories/mare-acasa'>Mare Acasa</a> <a href='"+linkHead+"places-to-visit/territories/west-barrow'>West Barrow</a> <a href='"+linkHead+"places-to-visit/territories/ciudad-del-mar'>Ciudad Del Mar</a> </div> </div> \
		<div class='spacer'></div><div class='container'><img style='width:90%; max-width:300px; height:auto; margin:auto;' src='"+linkHead+"files/images/logos/orasnoucitylogo.png'></div> \
		<div class='container'>(C) Oras Nou Ministry of Recreation | Department of Tourism<br><br> \
		<p><a href='"+linkHead+"information/legal'>Legal Information</a> | <a href='"+linkHead+"information/business'>Business</a> | <a href='"+linkHead+"information/mcbpo'>MCBPO</a></p></div>";
}
