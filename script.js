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

function navbar(){
    document.querySelector(".navbar2").style.left = "calc(100% - 200px)";
    document.querySelector(".navbar2").style.transition = "left 0.4s ease-in-out";
}

function goBack(){
    document.querySelector(".navbar2").style.left = "calc(200% - 200px)";
    document.querySelector(".navbar2").style.transition = "left 0.4s ease-in-out";
}
