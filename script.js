var arrowImage = document.getElementById("scroll-to-bottom");

arrowImage.addEventListener("click", function() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
    arrowImage.classList.remove("pulse");
    arrowImage.style.display = "none";
});

arrowImage.addEventListener("mouseover", function() {
    if (!arrowImage.classList.contains("clicked")) {
        arrowImage.classList.add("pulse");
    }
});

arrowImage.addEventListener("animationend", function() {
    if (!arrowImage.classList.contains("clicked")) {
        arrowImage.classList.remove("pulse");
    }
});

window.onload = function() {
    arrowImage.classList.add("pulse");
};



