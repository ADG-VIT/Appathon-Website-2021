//Timer Code
var timer = document.querySelector(".timer");

function updateTimer() {
	future = Date.parse("nov 26, 2021, 19:30:00");
	now = new Date();
	diff = future - now;

	days = Math.floor(diff / (1000 * 60 * 60 * 24));
	hours = Math.floor(diff / (1000 * 60 * 60));
	mins = Math.floor(diff / (1000 * 60));
	secs = Math.floor(diff / 1000);

	d = days;
	h = hours - days * 24;
	m = mins - hours * 60;
	s = secs - mins * 60;

	s = s < 10 ? "0" + s : s;
	m = m < 10 ? "0" + m : m;
	h = h < 10 ? "0" + h : h;

	timer.innerHTML = "0" + d + ":" + h + ":" + m + ":" + s;
}

//Toggle
setInterval("updateTimer()", 1000);

function speakers() {
	document.getElementById("speakers").style.display = "block";
	document.getElementById("sponsors").style.display = "none";
}

function sponsors() {
	document.getElementById("sponsors").style.display = "block";
	document.getElementById("speakers").style.display = "none";
}

//Footer
mybutton = document.getElementById("f-btn");

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 20 ||
		document.documentElement.scrollTop > 20
	) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function myFunction(x) {
	if (x.matches) { // If media query matches
		document.body.querySelector('#edate').innerHTML = "26 - 28 NOVEMBER";

		document.body.querySelector('.register').style.height = "55px";

		document.body.querySelector('.register').style.width = "180px";

		document.body.querySelector('.reg-btn').style.width = "180px";

		document.body.querySelector('.reg-btn').style.height = "55px";


	}
}

var x = window.matchMedia("(max-width: 450px)")
myFunction(x) // Call listener function at run time
x.addEventListener(myFunction) // Attach listener function on state changes



function myFunction1(y) {
	if (x.matches) { // If media query matches
		document.body.querySelector('#a-date').innerHTML = "26 - 28 NOVEMBER";

	}
}

var y = window.matchMedia('(min-width: 577px) and (max-width: 768px)')
myFunction1(y) // Call listener function at run time
y.addEventListener(myFunction1) // Attach listener function on state changes


var card_one = document.querySelector(".card_one");
var heading_one = document.querySelector(".inside_main_heading_one");

card_one.addEventListener("mouseenter", () => {
	heading_one.classList.add("hidden");
});

card_one.addEventListener("mouseleave", () => {
	heading_one.classList.remove("hidden");
});

var card_two = document.querySelector(".card_two");
var heading_two = document.querySelector(".inside_main_heading_two");

card_two.addEventListener("mouseenter", () => {
	heading_two.classList.add("hidden");
});

card_two.addEventListener("mouseleave", () => {
	heading_two.classList.remove("hidden");
});

var card_three = document.querySelector(".card_three");
var heading_three = document.querySelector(".inside_main_heading_three");

card_three.addEventListener("mouseenter", () => {
	heading_three.classList.add("hidden");
});

card_three.addEventListener("mouseleave", () => {
	heading_three.classList.remove("hidden");
});

var card_four = document.querySelector(".card_four");
var heading_four = document.querySelector(".inside_main_heading_four");

card_four.addEventListener("mouseenter", () => {
	heading_four.classList.add("hidden");
});

card_four.addEventListener("mouseleave", () => {
	heading_four.classList.remove("hidden");
});

var card_five = document.querySelector(".card_five");
var heading_five = document.querySelector(".inside_main_heading_five");

card_five.addEventListener("mouseenter", () => {
	heading_five.classList.add("hidden");
});

card_five.addEventListener("mouseleave", () => {
	heading_five.classList.remove("hidden");
});

var card_six = document.querySelector(".card_six");
var heading_six = document.querySelector(".inside_main_heading_six");

card_six.addEventListener("mouseenter", () => {
	heading_six.classList.add("hidden");
});

card_six.addEventListener("mouseleave", () => {
	heading_six.classList.remove("hidden");
});