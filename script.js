console.log("Hello from Code Quiz Master!");

// mobile menu section - open / close

const openMobileMenu = document.querySelector(".nav-menu-toggler");
const closeMobileMenu = document.querySelector(".close-btn");
const mobileMenu = document.querySelector(".mobile-nav-menu");

console.log(openMobileMenu);
console.log(closeMobileMenu);
console.log(mobileMenu);

openMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.add("open-nav-menu");
});

closeMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("open-nav-menu");
});

document.addEventListener("click", (e) => {
  console.log("user cliked here :", e.target);
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
console.log(current);

navMenu.forEach((menu) => {
  if (menu.href.endsWith(current)) {
    menu.classList.add("active-nav-menu");
  }
});

mobileNavMenu.forEach((menu) => {
  if (menu.href.endsWith(current)) {
    menu.classList.add("m-nav-menu-active-item");
  }
});

console.log(navBtnItems);

navBtnItems.forEach((item) => {
  if (item.href.endsWith(current)) {
    navBtnItems.forEach((i) => i.classList.remove("nav-btn-active"));
    item.classList.add("nav-btn-active");
  }
});
