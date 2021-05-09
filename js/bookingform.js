/* Javascript for opening booking form
Original code sourced and adapted for educational purposes from Traversy Media
https://www.youtube.com/watch?v=6ophW7Ask_0&t=737s&list=PLh5GpSavOzu4SUfYHzRNK_GyuMX-yT3tz&index=1 */

var bookingForm = document.getElementById('form');
var innerBookingForm = document.getElementById('inner-form2');
var list = document.getElementsByClassName('list');
var image = document.getElementById("form_image");
var movieTitle = document.getElementById('movieTitle');
var movieSession = document.getElementsByName('session');
var label1 = document.getElementById('label1');
var label2 = document.getElementById('label2');
var label3 = document.getElementById('label3');
var label4 = document.getElementById('label4');
var label5 = document.getElementById('label5');
var label6 = document.getElementById('label6');
var label7 = document.getElementById('label7');
var session1 = document.getElementById('session1');
var session2 = document.getElementById('session2');
var session3 = document.getElementById('session3');
var session4 = document.getElementById('session4');
var session5 = document.getElementById('session5');
var session6 = document.getElementById('session6');
var session7 = document.getElementById('session7');
var cost = document.getElementsByClassName('cost');
var subtotal = document.getElementsByClassName('subtotal');
var total = document.getElementById('total');
var openBtn = document.getElementsByTagName('button');
var closeBtn = document.getElementById('closeBtn');
var bookBtn = document.getElementById('book');
var movie = {
	'movie1': {
		'title': 'Thor - The Dark World',
		'genre': 'Action (AC)',
		'session': ['Wednesday-9pm',
				'Thursday-9pm',
				'Friday-9pm',
				'Saturday-9pm',
				'Sunday-9pm'],
		'image_src': './img/thorportrait.jpg'
	},

	'movie2': {
		'title': 'Ghosts of Girlfriends Past',
		'genre': 'Romantic Comedy (RC)',
		'session': ['Monday-9pm',
				'Tuesday-9pm',
				'Wednesday-1pm',
				'Thursday-1pm',
				'Friday-1pm',
				'Saturday-6pm',
				'Sunday-6pm'],
		'image_src': './img/ghostsofgirlfriendspastportrait.jpg'
	},

	'movie3': {
		'title': 'Special ID',
		'genre': 'Art/Foreign (AF)',
		'session': ['Monday-6pm',
				'Tuesday-6pm',
				'Saturday-3pm',
				'Sunday-3pm'],
		'image_src': './img/specialidportrait.jpg'
	},

	'movie4': {
		'title': 'Brave',
		'genre': 'Children (CH)',
		'session': ['Monday-1pm',
				'Tuesday-1pm',
				'Wednesday-6pm',
				'Thursday-6pm',
				'Friday-6pm',
				'Saturday-12pm',
				'Sunday-12pm'],
		'image_src': './img/braveportrait.jpg'
	}
};

openBtn[0].addEventListener('click', openForm1);
openBtn[1].addEventListener('click', openForm2);
openBtn[2].addEventListener('click', openForm3);
openBtn[3].addEventListener('click', openForm4);
closeBtn.addEventListener('click', closeForm);
movieTitle.addEventListener('change', selectMovie);
window.addEventListener('click', outsideClick);

for(var i=0; i<movieSession.length; i++) {
	movieSession[i].addEventListener('change', checkSessionPrice);
	movieSession[i].addEventListener('change', displayTotal);
}

for(var i=0; i<list.length; i++) {
	list[i].addEventListener('change', displayTotal);
}

function selectMovie() {
	var title = movieTitle.options[movieTitle.selectedIndex].value;
	switch(title) {
		case '0':
			openForm1();
			break;
		case '1':
			openForm2();
			break;
		case '2':
			openForm3();
			break;
		case '3':
			openForm4();
			break;
	}
}

function checkSessionPrice() {
	/* Enable the book button only once the sessions time is selected
	/* Original code sourced and adapted for educational purposes from Joe
	https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button */
	for(var i=0; i<movieSession.length; i++) {
		if(movieSession[i].checked) {
			val = movieSession[i].value;
			enableInnerForm();
			break;
		}
	}

	if(val == "MON-01" || val == "MON-06" || val == "MON-09" ||
		val == "TUE-01" || val == "TUE-06" || val == "TUE-09" ||
		val == "WED-01" || val == "THU-01" || val == "FRI-01") {

		cost[0].value = 12.5;
		cost[1].value = 10.5;
		cost[2].value = 8.5;
		cost[3].value = 25;
		cost[4].value = 20;
		cost[5].value = 22;
		cost[6].value = 20;
		cost[7].value = 20;
		displayCost();
	}
	else {
		cost[0].value = 18.5;
		cost[1].value = 15.5;
		cost[2].value = 12.5;
		cost[3].value = 30;
		cost[4].value = 25;
		cost[5].value = 33;
		cost[6].value = 30;
		cost[7].value = 30;
		displayCost();
	}
}

function displayCost() {
	for(var i=0; i<cost.length; i++) {
		cost[i].innerHTML = convertToCurrency(cost[i].value);
	}
}

function displaySubTotal() {
	calcSubTotal();
	for(var i=0; i<subtotal.length; i++) {
		if(subtotal[i].value == 0)
			subtotal[i].innerHTML = "";
		else
			subtotal[i].innerHTML = convertToCurrency(subtotal[i].value);
	}
}

function displayTotal() {
	displaySubTotal();
	calcTotal();

	for(var i=0; i<list.length; i++) {
		if(list[i].options[list[i].selectedIndex].value != 0) {
			enableBtn();
			break;
		}
		else
			disableBtn();
	}

	if(total.value == 0)
		total.style.display = 'none';
	else {
		total.style.display = 'block';
		total.innerHTML = "Grand Total: " + convertToCurrency(total.value);
	}
}

// aross https://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-dollars-currency-string-in-javascript?page=1&tab=votes#tab-top
function convertToCurrency(number) {
	// Paolo Bergantino https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript
	return number.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD'
	});
}

function calcSubTotal() {
	for(var i=0; i<list.length; i++) {
		subtotal[i].value = cost[i].value * list[i].options[list[i].selectedIndex].value;
	}
}

function calcTotal() {

	total.value = 0;

	for(var i=0; i<subtotal.length; i++) {
		total.value += subtotal[i].value;
	}
}

function disableInnerForm() {
	innerBookingForm.style.display = 'none';
}

function enableInnerForm() {
	innerBookingForm.style.display = 'block';
}

function disableBtn() {
	bookBtn.disabled = true;
	bookBtn.style.cursor = "default";
	bookBtn.style.background = "#595953";
	bookBtn.style.opacity = 0.3;
}

function enableBtn() {
	bookBtn.disabled = false;
	bookBtn.style.background = "#8B0000";
	bookBtn.style.cursor = "pointer";
	bookBtn.style.opacity = 1;
}

function myFunction() {

}

function openForm(num) {
	bookingForm.style.display = 'block';
	disableInnerForm();
	disableBtn();
	total.style.display = 'none';

	for(var i=0; i<list.length; i++) {
		list[i].value = 0;
		cost[i].innerHTML = "";
		subtotal[i].innerHTML = "";
	}

	/* Original code sourced from NVRAM
 	https://stackoverflow.com/questions/2554116/how-to-clear-radio-button-in-javascript */
	for(var i=0; i<movieSession.length; i++) {
		movieSession[i].checked = false;
	}

	label5.style.display = "block";
	label6.style.display = "block";
	label7.style.display = "block";
}

function openForm1() {
	openForm();
	image.src = "./img/thorportrait.jpg";
	image.alt = "Thor The Dark World";
	movieTitle.value = 0;
	// document.getElementsByName('movie_name').value = "AC";
	label1.innerHTML = "Wed-9pm";
	session1.value = "WED-09";
	label2.innerHTML = "Thu-9pm";
	session2.value = "THU-09";
	label3.innerHTML = "Fri-9pm";
	session3.value = "FRI-09";
	label4.innerHTML = "Sat-9pm";
	session4.value = "SAT-09";
	label5.innerHTML = "Sun-9pm";
	session5.value = "SUN-09";
	label6.style.display = 'none';
	label7.style.display = 'none';
}


function openForm2() {
	openForm();
	image.src = "./img/ghostsofgirlfriendspastportrait.jpg";
	image.alt = "Ghosts of Girlfriends Past";
	movieTitle.value = 1;
	// document.getElementByName('movie_name').value = "RC";
	label1.innerHTML = "Mon-9pm";
	session1.value = "MON-09";
	label2.innerHTML = "Tue-9pm";
	session2.value = "TUE-09";
	label3.innerHTML = "Wed-1pm";
	session3.value = "WED-01";
	label4.innerHTML = "Thu-1pm";
	session4.value = "THU-01";
	label5.innerHTML = "Fri-1pm";
	session5.value = "FRI-01";
	label6.innerHTML = "Sat-6pm";
	session6.value = "SAT-06";
	label7.innerHTML = "Sun-6pm";
	session7.value = "SUN-06";
}

function openForm3() {
	openForm();
	image.src = "./img/specialidportrait.jpg";
	image.alt = "Special ID";
	movieTitle.value = 2;
	// document.getElementByName('movie_name').value = "AF";
	label1.innerHTML = "Mon-6pm";
	session1.value = "MON-06";
	label2.innerHTML = "Tue-6pm";
	session2.value = "TUE-06";
	label3.innerHTML = "Sat-3pm";
	session3.value = "SAT-03";
	label4.innerHTML = "Sun-3pm";
	session4.value = "SUN-03";
	label5.style.display = 'none';
	label6.style.display = 'none';
	label7.style.display = 'none';
}

function openForm4() {
	openForm();
	image.src = "./img/braveportrait.jpg";
	image.alt = "Brave";
	movieTitle.value = 3;
	// document.getElementByName('movie_name').value = "CH";
	label1.innerHTML = "Mon-1pm";
	session1.value = "MON-01";
	label2.innerHTML = "Tue-1pm";
	session2.value = "TUE-01";
	label3.innerHTML = "Wed-6pm";
	session3.value = "WED-06";
	label4.innerHTML = "Thu-6pm";
	session4.value = "THU-06";
	label5.innerHTML = "Fri-6pm";
	session5.value = "FRI-06";
	label6.innerHTML = "Sat-12pm";
	session6.value = "SAT-12";
	label7.innerHTML = "Sun-12pm";
	session7.value = "SUN-12";
}

function closeForm() {
	bookingForm.style.display = 'none';
}

function outsideClick(e) {
	if(e.target == bookingForm) {
		bookingForm.style.display = 'none';
	}
}