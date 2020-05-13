const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const parentEl = document.querySelector('#ingredients');
const arrOfIngred = [];

ingredients.forEach(ingredient => {
  const newEl = document.createElement('li');
  newEl.textContent = ingredient;
  arrOfIngred.push(newEl);
});

parentEl.after(...arrOfIngred);
