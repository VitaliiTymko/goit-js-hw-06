function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButton = document.querySelector(".change-color");
const colorRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");

changeColorButton.addEventListener("click", (event) => {
  const randomColor = (bodyRef.style.backgroundColor = getRandomHexColor());
  
  colorRef.textContent = randomColor.value;
});