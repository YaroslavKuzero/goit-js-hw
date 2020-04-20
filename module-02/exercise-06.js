let input;
const numbers = [];
let inputNumber;
let total = 0;

while (input !== null) {
  input = prompt('Please enter any number');
  inputNumber = Number(input);
  if (Number.isNaN(inputNumber)) {
    alert(`${input} is not a number. Pls try again.`);
  } else if (input === null) {
    alert(
      `You have inputed ${numbers} I will count sum for you`,
    );
  } else {
    numbers.push(inputNumber);
  }
}

for (let i = 0; i < numbers.length; i += 1) {
  total += Number(numbers[i]);
}

console.log(`The sum of inputed numbers is ${total}`);
