console.log("Hello from Code Quiz Master!");

// mobile menu section - open / close

const openMobileMenu = document.querySelector(".nav-menu-toggler");
const closeMobileMenu = document.querySelector(".close-btn");
const mobileMenu = document.querySelector(".mobile-nav-menu");

openMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.add("open-nav-menu");
});

closeMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("open-nav-menu");
});

document.addEventListener("click", (e) => {
  if (
    mobileMenu.classList.contains("open-nav-menu") &&
    !mobileMenu.contains(e.target) &&
    !openMobileMenu.contains(e.target)
  ) {
    mobileMenu.classList.remove("open-nav-menu");
  }
});

// active nav menu status toggle

const navMenu = document.querySelectorAll(".nav-menu");
const mobileNavMenu = document.querySelectorAll(".m-nav-menu-items");
const navBtnItems = document.querySelectorAll(".nav-btn-items");

const current = window.location.pathname;

navMenu.forEach((menu) => {
  if (menu.href.endsWith(current)) {
    navMenu.forEach((i) => i.classList.remove("active-nav-menu"));
    menu.classList.add("active-nav-menu");
  }
});

mobileNavMenu.forEach((menu) => {
  if (menu.href.endsWith(current)) {
    mobileMenu.forEach((i) => i.classList.remove("m-nav-menu-active-item"));
    menu.classList.add("m-nav-menu-active-item");
  }
});

navBtnItems.forEach((item) => {
  if (item.href.endsWith(current)) {
    navBtnItems.forEach((i) => i.classList.remove("nav-btn-active"));
    item.classList.add("nav-btn-active");
  }
});
