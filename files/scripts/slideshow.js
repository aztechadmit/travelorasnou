/*
	USE CASE

 	<div class='banner'>
		<div class='slideshowContainer'>
  			<img src=''>
       			<img src=''>
  		</div>
  	</div>
*/

var slides = document.querySelectorAll('.slideshowContainer img');

var slideIndex = 0;

showSlides();

function showSlides(){
	let i;
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	
	slideIndex++;
	
	if (slideIndex > slides.length) {slideIndex = 1}
	slides[slideIndex-1].style.display = "block";
	
	setTimeout(showSlides, 2000); // Change image every 2 seconds
}
