var yourName =prompt("Enter Your Name");

var names=yourName.slice(0,1);
names= names.toUpperCase();

var loweCaseName=yourName.slice(1,yourName.length);
loweCaseName= loweCaseName.toLowerCase();

alert("Hello" + " "+ names + loweCaseName.slice(0,yourName.length)+" "+ "Welcome To My Website.");

var notes=document.getElementById('note');
notes.innerHTML="Hi."+names + loweCaseName.slice(0,yourName.length)+".I Hope You Like This Website. I Am Thankfully To You .You Vist My Website......❤🤍💛";



// Navbar
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});