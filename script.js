
// Scroll To Top

const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        scrollTop.classList.add("show");
    } else {
        scrollTop.classList.remove("show");
    }

});


// Scroll Reveal Animation

const reveals = document.querySelectorAll(".reveal");

function revealElements() {

    reveals.forEach(function (element) {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealElements);

window.addEventListener("load", revealElements);