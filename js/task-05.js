const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");
// console.log(inputRef);
// console.log(outputRef);
inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
// console.log(event.currentTarget.value);
outputRef.textContent = event.currentTarget.value
}


// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. Если инпут пустой, 
// в спане должна отображаться строка "Anonymous".

