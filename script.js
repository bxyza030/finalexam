
// get all the sections on the page
var sections = document.querySelectorAll('section');

// calculate the total height of all the sections
var totalHeight = 0;
sections.forEach(function(section) {
  totalHeight += section.offsetHeight;
});

// set the min-height of the body to the total height of all the sections
document.body.style.minHeight = totalHeight + 'px';

document.addEventListener('DOMContentLoaded', function() {
    // calculate the total height of the content and set the min-height of the body
    var sections = document.querySelectorAll('section');
    var totalHeight = 0;
    sections.forEach(function(section) {
      totalHeight += section.offsetHeight;
    });
    document.body.style.minHeight = totalHeight + 'px';
  });
  
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


