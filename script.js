//Timer Code
var timer = document.querySelector(".timer");

function updateTimer() {
	future = Date.parse("nov 26, 2021 00:00:00");
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
