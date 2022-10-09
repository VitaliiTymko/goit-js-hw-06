const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const newArrayRef = document.querySelector(".gallery");
const galleryRef = [];

for (let i=0; i<images.length; i+=1) {
  const liRef = document.createElement("li");
  const imageRef = document.createElement("img");
  imageRef.src = images[i].url;  
  imageRef.alt = images[i].alt;
  imageRef.width = 150;
  liRef.classList.add("item-task-03");
  liRef.append(imageRef);
  // console.log(liRef);
  galleryRef.push(liRef);
  // console.log(galleryRef);
}
newArrayRef.append(...galleryRef);

console.log(newArrayRef);
// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.