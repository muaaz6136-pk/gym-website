const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
}

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
    });
});

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(function (card) {
    card.addEventListener("click", function () {
        const serviceName = card.querySelector("h3").innerText;

        alert(
            serviceName +
            "\n\nThis program is available at GYM PRO."
        );
    });
});