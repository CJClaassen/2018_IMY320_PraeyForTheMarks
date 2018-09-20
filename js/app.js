window.onscroll = function(){
    checkNavPosition()
};
var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;
function checkNavPosition(){
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
