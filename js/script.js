const   hamburger = document.querySelector(".hamburger"),
        menu = document.querySelector("nav ul"),
        sections = document.querySelectorAll("section"),
        tips = document.querySelectorAll("a[title]");

hamburger.addEventListener("click", function(){
    this.classList.toggle("open");
    menu.classList.toggle("nav_open");
}, false);
menu.addEventListener("click", function(){

	if(this.className = "nav_open"){
		this.classList.remove("nav_open")
		hamburger.classList.remove("open");
	} else null

}, false);

tips.forEach(function(tip){
	tip.addEventListener("mouseenter", function(e){
	e.preventDefault();
})});


window.addEventListener("resize", function(){
	hamburger.classList.remove("open");
	menu.classList.remove("nav_open");
}, false)

window.addEventListener("scroll", (e) => this.scrollY > (window.innerHeight - 20) ? menu.classList.add("fixed_menu") :  menu.classList.remove("fixed_menu"), false)
