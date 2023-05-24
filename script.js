window.onscroll = function() {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        document.getElementById("upBtn").style.display="inline";
    }

    else {
        document.getElementById("upBtn").style.display="none";
    }
   }

function scrollUp () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}