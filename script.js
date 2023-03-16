var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
        document.getElementById("navbar").style.transition = "top 0.5s ease-in-out";
    }
    prevScrollpos = currentScrollPos;
}
