const slideContainer = document.getElementById("slider");

let mouseDown = false;
let startX;
let scrollLeft;

slideContainer.addEventListener("mousedown", (e) => {
  mouseDown = true;
  startX = e.pageX - slideContainer.offsetLeft;
  scrollLeft = slideContainer.scrollLeft;
});

slideContainer.addEventListener("mouseleave", (e) => {
  mouseDown = false;
});

slideContainer.addEventListener("mouseup", (e) => {
  mouseDown = false;
});

slideContainer.addEventListener("mousemove", (e) => {
  if (!mouseDown) return;
  e.preventDefault();
  const x = e.pageX - slideContainer.offsetLeft;
  const walk = x - startX; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});
