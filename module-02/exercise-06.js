let input;
const numbers = [];
let inputNumber;
let number;
let total = 0;

while (input !== null) {
  input = prompt('Please enter any number');
  inputNumber = Number(input);
  if (Number.isNaN(inputNumber)) {
    alert(`${input} is not a number. Pls try again.`);
  } else if (input === null) {
    alert(
      `You have inputed ${numbers} I am counting sum for you`,
    );
  } else {
    numbers.push(inputNumber);
  }
}
// eslint-disable-next-line
for (number of numbers) {
  total += Number(number);
}

console.log(`The sum of inputed numbers is ${total}`);
