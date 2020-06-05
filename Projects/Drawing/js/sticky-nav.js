window.onscroll = function() { myScroll() };

var navbar = document.querySelector("#main-nav");
var sticky = navbar.offsetTop;

function myScroll() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}