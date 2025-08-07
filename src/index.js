import "./styles.css";

const images = document.querySelectorAll("img");
const slider = document.querySelector(".slider");
const container = document.querySelector(".container");
const dots = document.querySelectorAll(".dot");

let intervalId = setInterval(slideShow, 1000);

slider.style.left = "0px";
function slideShow() {
  let x = parseInt(slider.style.left);
  if (x <= -7 * 500) {
    clearInterval(intervalId);
  }
  slider.style.left = `${x - 500}px`;
}

dots.forEach((item, index) => {
  item.addEventListener("click", () => {
    clearInterval(intervalId);
    slider.style.left = `${-500 * index}px`;
    let x = parseInt(slider.style.left);
    if (x >= -7 * 500) {
      intervalId = setInterval(slideShow, 1000);
    }
  });
});
