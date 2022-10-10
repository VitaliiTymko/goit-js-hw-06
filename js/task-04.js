let counterValue = 0;


const decrementButton = document.querySelectorAll('button')[0];
const incrementButton = document.querySelectorAll('button')[1];
const valueRef = document.querySelector('#value');


console.log(decrementButton);
console.log(incrementButton);
console.log(valueRef);

decrementButton.addEventListener('click', () => {
    counterValue -=1;
    valueRef.textContent = counterValue;
})

incrementButton.addEventListener('click', () => {
    counterValue +=1;
    valueRef.textContent = counterValue;    
})



// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.