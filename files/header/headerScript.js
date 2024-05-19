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
	console.clear();

	loader.innerHTML = "<div></div>";
	header.innerHTML = "<div id='headerSpacer'></div><div id='headerBar'></div>";

	const headerBar = document.getElementById("headerBar");

	if(screen.width > 900){

		headerBar.innerHTML = "<div id='headerContents'><img onclick='"+'window.open("https://aztechadmit.github.io/travelorasnou", "_self")'+"' src='https://gcparksandresorts.github.io/travelorasnou/files/images/logos/travelONlogo.png' id='headerLogo'></div>";

		const headerContents = document.getElementById("headerContents");

		headerContents.innerHTML += "<a>Menu</a> <a>Vacation Planning</a> <a href='"+linkHead+"things-to-do'>Things to Do</a> <a>Places to Visit</a>";

	}else{
		console.log("Minimized Header");
		headerBar.innerHTML = "<div id='headerContents'><img onclick='"+'window.open("https://aztechadmit.github.io/travelorasnou", "_self")'+"' src='https://gcparksandresorts.github.io/travelorasnou/files/images/logos/travelONlogo.png' id='headerLogo'> <a onclick='openHeaderMenu()'>MENU</a></div>";
	}
	createFooter();
}

// If small screen width, this menu will create the normal header elements inside the expandable menu
function openHeaderMenu(){

}

// Create the Footer and Populate it
function createFooter(){
	// Copy and Past:   <a href='"+linkHead+"sublink/sublink2'>link_text</a>
	
	footer.innerHTML = "<br><div class='spacer'></div><div class='container' style='margin-bottom:0px;'><div class='footerLinks'>\
				<div> <h4>Information</h4> <a>Getting to Oras Nou</a> <a>Visitor Information</a> <a>Frequently Asked Questions</a> <a>Travel Alerts</a></div> \
				<div> <h4>Plan Your Visit</h4> <a href='"+linkHead+"articles/travel-guides/transportation'>Transportation</a> <a href='"+linkHead+"places-to-stay'>Hotels and Lodging</a> <a href='"+linkHead+"articles/travel-guides'>Travel Guides</a> <a>Corporate Meetings and Events</a></div> \
				<div> <h4>Explore</h4> <a href='"+linkHead+"things-to-do'>Things to Do</a> <a href='"+linkHead+"things-to-do/events'>Events and Festivals</a> <a>Clubbing and Nightlife</a> <a href='"+linkHead+"things-to-do/attractions?category=museums'>Museums and Exhibitions</a> <a href='"+linkHead+"things-to-do/attractions'>Attractions</a> </div> \
				<div> <h4>Oras Nou Territories</h4> <a href='"+linkHead+"places-to-visit/territories/city-of-oras-nou'>City of Oras Nou</a> <a href='"+linkHead+"places-to-visit/territories/mare-acasa'>Mare Acasa</a> <a href='"+linkHead+"places-to-visit/territories/west-barrow'>West Barrow</a> <a href='"+linkHead+"places-to-visit/territories/ciudad-del-mar'>Ciudad Del Mar</a> </div> </div> \
		<div class='container'>(C) Oras Nou Ministry of Recreation | Department of Tourism<br><br> \
		<p><a>Legal Information</a> | <a>Business</a> | <a>MCBPO</a></p></div>";
}
