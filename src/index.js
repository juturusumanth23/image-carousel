import "./styles.css";

const images = document.querySelectorAll("img");
const slider = document.querySelector(".slider");
const container = document.querySelector(".container");

let count = 0;
const intervalId = setInterval(slideShow, 1000);

function slideShow() {
  count++;
  if (count == 8) {
    clearInterval(intervalId);
  }
  slider.style.left = `${-500 * count}px`;
}
