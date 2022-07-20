let btn = document.querySelector(".click");
let body = document.querySelector("body");
let showColor = document.querySelector(".show-color");

let colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "pink",
  "gold",
  "violet",
];

btn.addEventListener("click", function () {
  let randomColor = colors[randomNumber()];
  body.style.backgroundColor = randomColor;
  showColor.textContent = randomColor;
});

function randomNumber() {
  return Math.floor(Math.random() * colors.length);
}
