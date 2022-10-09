const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const newArrayRef = document.querySelector('#ingredients');
const arrayLi = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const liRef = document.createElement("li");
// console.log(ingredients[i]);
  liRef.classList.add("item");
  liRef.textContent = ingredients[i];
  arrayLi.push(liRef);
  console.log(liRef);
}
// console.log(555);
console.log(arrayLi);
newArrayRef.append(...arrayLi);


// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.
