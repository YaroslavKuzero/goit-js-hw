const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtnRef = document.querySelector(
  'button[data-action="start"]',
);
const stopBtnRef = document.querySelector(
  'button[data-action="stop"]',
);
const bodyRef = document.querySelector('body');
let timerId = null;
let isActive = false;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const intervalSwitchColor = function () {
  if (isActive) {
    return;
  }

  isActive = true;
  timerId = setInterval(() => {
    bodyRef.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length)];
  }, 1000);
};

const stopSwitching = function () {
  isActive = false;
  clearInterval(timerId);
};

startBtnRef.addEventListener('click', intervalSwitchColor);
stopBtnRef.addEventListener('click', stopSwitching);
