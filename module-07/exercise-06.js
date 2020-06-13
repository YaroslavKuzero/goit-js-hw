const inputRef = document.querySelector(
  '#validation-input',
);
const dataLength = inputRef.getAttribute('data-length');

inputRef.addEventListener('change', event => {
  inputRef.classList.add('invalid');
  if (event.target.value.length === Number(dataLength)) {
    inputRef.classList.replace('invalid', 'valid');
  }
});
