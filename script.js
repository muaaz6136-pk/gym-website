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

function joinPlan(plan) {


alert(
    "You selected the " +
    plan +
    " Membership Plan.\n\nThank you for choosing GYM PRO!"
);


}

function showMessage() {


alert(
    "Welcome to GYM PRO!\n\n" +
    "Your fitness journey starts today."
);


}
