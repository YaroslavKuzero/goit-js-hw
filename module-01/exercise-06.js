let input;
let inputNumber;
let total = 0;

do {
  input = prompt('Please enter any number');
  inputNumber = Number(input);
  if (Number.isNaN(inputNumber)) {
    alert(`${input} is not a number. Pls try again.`);
  } else {
    total += inputNumber;
  }
} while (input !== null);

alert(`Sum of entered numbers is ${total}`);
