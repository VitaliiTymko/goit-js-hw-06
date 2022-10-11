const inputRef = document.querySelector("input")
// console.log(inputRef);
// console.log(inputRef.dataset.length);


inputRef.addEventListener("blur", (event) => {
    // console.log(event.currentTarget.value);
    // console.log(event.currentTarget.value.length);

    if (Number(event.currentTarget.value.length) === Number(inputRef.dataset.length)) {        
        // console.log(555);
        inputRef.classList.add("valid");
        inputRef.classList.remove("invalid");
        } else {
        inputRef.classList.add("invalid");
        inputRef.classList.remove("valid");
    }      
    });

