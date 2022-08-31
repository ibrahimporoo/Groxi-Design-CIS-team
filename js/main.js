// Menu Icon
let menuIcon = document.getElementById("menu-icon");
let mainLinks = document.querySelector("header .container .right-side");
menuIcon.addEventListener("click", _ => {
	mainLinks.classList.toggle("on");
	mainLinks.classList.toggle("fade");
})

