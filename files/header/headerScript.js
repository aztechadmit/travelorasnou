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
	header.innerHTML = "<div id='headerSpacer'></div><div id='headerBar'></div>";

	const headerBar = document.getElementById("headerBar");

	if(screen.width > 900){

		headerBar.innerHTML = "<div id='headerContents'><img onclick='"+'window.open("https://aztechadmit.github.io/travelorasnou", "_self")'+"' src='https://gcparksandresorts.github.io/travelorasnou/files/images/logos/travelONlogo.png' id='headerLogo'></div><div id='headerMiniMenu'></div><div id='closeMiniMenu' style='display:none' onclick='openMiniMenu(0)'></div> ";

		const headerContents = document.getElementById("headerContents");

		headerContents.innerHTML += "<a onmouseover='openMiniMenu(2)'>Menu</a> <a onmouseover='openMiniMenu(1)'>Vacation Planning</a> <a href='"+linkHead+"things-to-do'>Things to Do</a> <a href='"+linkHead+"places-to-visit'>Places to Visit</a>";
		
	}else{
		console.log("Minimized Header");
		headerBar.innerHTML = "<div id='headerContents'><img onclick='"+'window.open("https://aztechadmit.github.io/travelorasnou", "_self")'+"' src='https://gcparksandresorts.github.io/travelorasnou/files/images/logos/travelONlogo.png' id='headerLogo'> <a onclick='openHeaderMenu()'>MENU</a></div><div id='closeMiniMenu' style='display:none' onclick='openMiniMenu(0)'></div> ";
	}
	createFooter();
}

// If small screen width, this menu will create the normal header elements inside the expandable menu
function openMiniMenu(num){
	const headerMiniMenu = document.getElementById("headerMiniMenu");
	const closerMe = document.getElementById("closeMiniMenu");
	switch(num){
		case 0:
			headerMiniMenu.style.display = "none";
			closerMe.style.display = "none";
			break;
		case 1:
			headerMiniMenu.innerHTML = "<a style='color:orange'>Vacation Planner</a> <a>Travel Guides and Information</a> <a>Getting Around Town</a> <a>Places to Stay</a> <a>Visitor Visas</a>";
			headerMiniMenu.style.display = "block";
			closerMe.style.display = "block";
			break;
		case 2:
			headerMiniMenu.innerHTML = "<a style='color:orange'>Articles and Information</a> <a>Corporate Events and Meetings</a> <a>Conventions and Events</a> <a>Oras Nou Theater and Performances</a>";
			headerMiniMenu.style.display = "block";
			closerMe.style.display = "block";
			break;
	}// end of switch
}// end of openMiniMenu(num)

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
