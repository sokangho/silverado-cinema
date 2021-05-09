/* Slideshow javascript original code sourced and adapted for educational purposes from 
w3schools https://www.w3schools.com/howto/howto_js_slideshow.asp
and RK Tutorial https://www.youtube.com/watch?v=7QyfBp9uHTs */

var slideIndex = 1;
		
manualSlide();
autoSlide();


function changeIndex(n) {
	slideIndex += n;
	manualSlide(slideIndex);
}

function currentSlide(n) {
	slideIndex = n;
	manualSlide();
}

function manualSlide() {
	var i;
	var x = document.getElementsByClassName("slides");
	var dots = document.getElementsByClassName("dot");

	for(i=0; i<x.length; i++) {
		x[i].style.display = "none";
	}
	for(i=0; i<dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	if(slideIndex > x.length) {slideIndex = 1}
	if(slideIndex < 1) {slideIndex = x.length}

	x[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}


function autoSlide() {
	var i;
	var x = document.getElementsByClassName("slides");
	var dots = document.getElementsByClassName("dot");

	for(i=0; i<x.length; i++) {
		x[i].style.display = "none";
	}
	for(i=0; i<dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	if(slideIndex > x.length) {slideIndex = 1}
	x[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	setTimeout(autoSlide, 2000);
	slideIndex++;
}