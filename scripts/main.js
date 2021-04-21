const hamburgerMenu = document.getElementById("hamburger-menu");
const body = document.querySelector("body");
const header = document.getElementById("header");

let startCounter = false;

setInterval(() => {
  if (window.scrollY > 200) {
    header.classList.add("sticky-header");
    header.style.animation = "header-animation 1s";
  } else {
    header.classList.remove("sticky-header");
    header.style.animation = "";
  }
}, 200);

const counterInterval = setInterval(() => {
  if (window.scrollY > 1743) {
    counterAnimation("client-counter", 0, randomNumberHandler(50), 1000);
    counterAnimation("project-counter", 0, randomNumberHandler(300), 1000);

    clearInterval(counterInterval);
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

const counterAnimation = (id, start, end, duration) => {
  if (start === end) return;

  const range = end - start;
  let currentCount = start;
  let increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor((duration / range) * 2));
  const counterObj = document.getElementById(id);

  const timer = setInterval(() => {
    currentCount += increment;
    counterObj.innerHTML = currentCount;
    if (currentCount >= end) {
      clearInterval(timer);
    }
  }, stepTime);
};

const randomNumberHandler = (range) => {
  let num = Math.floor(Math.random() * range);
  console.log(num);
  return num;
};
