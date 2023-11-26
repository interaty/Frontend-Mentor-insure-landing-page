const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const body = document.querySelector("body");
const navBtn = document.querySelector("#nav-btn");
const iconClose = document.querySelector(".icon-close");
const iconBurger = document.querySelector(".icon-hamburger");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible") ? navToggle.setAttribute("aria-expanded", false) & iconClose.setAttribute("data-visible", false) &
  iconBurger.setAttribute("data-visible", true)
  : navToggle.setAttribute("aria-expanded", true) &
  iconClose.setAttribute("data-visible", true) &
  iconBurger.setAttribute("data-visible", false);
  
  
  primaryNav.toggleAttribute("data-visible");
  navBtn.toggleAttribute("data-inverted");
  
  // iconClose.toggleAttribute("data-visible");
  // iconBurger.toggleAttribute("data-visible");
  body.toggleAttribute("data-scroll")
});