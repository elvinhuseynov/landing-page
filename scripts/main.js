const hamburgerMenu = document.getElementById("hamburger-menu");
const body = document.querySelector("body");
const header = document.getElementById("header");

setInterval(() => {
  if (window.scrollY > 200) {
    header.classList.add("sticky-header");
    header.style.animation = "header-animation 1s";
  } else {
    header.classList.remove("sticky-header");
    header.style.animation = "";
  }
}, 200);

let menuBool = false;
const hamburgerMenuFunc = () => {
  menuBool = !menuBool;
  if (menuBool) {
    hamburgerMenu.style.transform = "translateX(0)";
  } else {
    hamburgerMenu.style.transform = "translateX(100%)";
  }
};
