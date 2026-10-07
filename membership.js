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


const priceButtons = document.querySelectorAll(".price-btn");

priceButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const plan = button.parentElement.querySelector("h3").innerText;

        alert(
            "You selected the " +
            plan +
            " Membership Plan.\n\n" +
            "Thank you for choosing GYM PRO!"
        );

    });

});