const counterValue = document.querySelector('#value');
const butIncRef = document.querySelector(
  'button[data-action="increment"]',
);
const butDecRef = document.querySelector(
  'button[data-action="decrement"]',
);
let numRef = Number(counterValue.textContent);

const increment = () => {
  numRef += 1;
  counterValue.textContent = numRef;
};
const decrement = () => {
  numRef -= 1;
  counterValue.textContent = numRef;
};

butIncRef.addEventListener('click', increment);
butDecRef.addEventListener('click', decrement);
