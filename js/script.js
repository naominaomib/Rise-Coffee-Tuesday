const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const menuLinks = document.querySelectorAll(".nav-menu a");

function toggleMenu() {
  const isOpen = navMenu.classList.toggle("is-open");
  hamburger.setAttribute("aria-expanded", isOpen);
}

function closeMenu() {
  navMenu.classList.remove("is-open");
  hamburger.setAttribute("aria-expanded", "false");
}

hamburger.addEventListener("click", toggleMenu);

menuLinks.forEach(function (link) {
  link.addEventListener("click", closeMenu);
});