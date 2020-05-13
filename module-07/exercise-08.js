const inputRef = document.querySelector(
  '#controls > input',
);
const createButRef = document.querySelector(
  '#controls > button[data-action="render"]',
);
const destroyButRef = document.querySelector(
  '#controls > button[data-action="destroy"]',
);
const boxParentRef = document.querySelector('#boxes');
let defWidth = 30;
let defHeight = 30;

const getRandom = () => Math.round(Math.random() * 255);

const createBox = function () {
  const createTag = document.createElement('div');
  createTag.style.width = `${defWidth}px`;
  createTag.style.height = `${defHeight}px`;
  createTag.style.backgroundColor = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
  return createTag;
};

const createBoxes = function (amount) {
  const arrBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    arrBoxes.push(createBox());
    defWidth += 10;
    defHeight += 10;
  }
  boxParentRef.append(...arrBoxes);
};

const destroyBoxes = function () {
  const arrChilds = document.querySelectorAll(
    '#boxes > div',
  );
  arrChilds.forEach(child =>
    boxParentRef.removeChild(child),
  );
  defWidth = 30;
  defHeight = 30;
};

createButRef.addEventListener('click', () =>
  createBoxes(Number(inputRef.value)),
);

destroyButRef.addEventListener('click', () =>
  destroyBoxes(),
);
