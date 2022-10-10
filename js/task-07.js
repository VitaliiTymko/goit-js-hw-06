const inputTextRef = document.querySelector("#text");
const controlRef = document.querySelector("#font-size-control");
console.log(inputTextRef);
console.log(controlRef);

controlRef.oninput = function () {
    inputTextRef.style.fontSize = controlRef.value + 'px';
}

