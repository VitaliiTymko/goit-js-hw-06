const inputRef = document.querySelector("#name-input")
const outputRef = document.querySelector("#name-output")
inputRef.addEventListener("input", (event) => {
  const inputValue = event.target.value;
  inputRef.addEventListener("change", (event) => {
    outputRef.disabled = !event.target.checked;
    outputRef.textContent = `${inputValue}`;
  });
});
inputRef.addEventListener("focus", (event) => {
  event.target.style.border = "2px solid blue";
  event.target.style.outline = "none";
  event.target.style.borderRadius = "30px"
});
inputRef.addEventListener("blur", (event) => {
  event.target.style.border = "2px solid tomato";
  event.target.style.outline = "none";
  event.target.style.borderRadius = "10px"
});