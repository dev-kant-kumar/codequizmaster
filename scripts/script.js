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
    mobileNavMenu.forEach((i) => i.classList.remove("m-nav-menu-active-item"));
    menu.classList.add("m-nav-menu-active-item");
  }
});

navBtnItems.forEach((item) => {
  if (item.href.endsWith(current)) {
    navBtnItems.forEach((i) => i.classList.remove("nav-btn-active"));
    item.classList.add("nav-btn-active");
  }
});

// check if user data is saved

const userFound = JSON.parse(localStorage.getItem("user"));

// handing routes if user is logged in

const removedRoutes =
  "/codequizmaster/signup.php" || "/codequizmaster/signin.php";

if (userFound) {
  switch (current) {
    case "/codequizmaster/signup.php":
      window.location.href = "dashboard.php";
      break;
    case "/codequizmaster/signin.php":
      window.location.href = "dashboard.php";
      break;
  }
} else {
  switch (current) {
    case "/codequizmaster/dashboard.php":
      window.location.href = "signin.php";
      break;

    case "/codequizmaster/profile.php":
      window.location.href = "signin.php";
      break;
  }
}

// nav dom
const accountCenter = document.querySelector(".account-center");
const navBtn = document.querySelector(".nav-btn");
const avatar = document.querySelector(".avatar");
const noAvatar = document.querySelector(".no-avatar");

if (userFound) {
  console.log("Logged in user : ", userFound);
  // changing navbar
  navBtn.style.display = "none";
  accountCenter.style.display = "flex";

  // check if user has avatar

  if (userFound?.avatar) {
    noAvatar.style.display = "none";
    avatar.setAttribute("src", user.avatar);
  } else {
    avatar.style.display = "none";
    noAvatar.textContent = userFound?.name.charAt(0).toUpperCase();
  }

  // dashboard section
  if (current === "/codequizmaster/dashboard.php") {
    const userForBanner = document.querySelector(".user");
    const firstName = userFound?.name.split(" ")[0];
    userForBanner.textContent = firstName + " 👋";
  }
}
