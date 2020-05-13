const rangeRef = document.querySelector(
  '#font-size-control',
);
const textRef = document.querySelector('#text');

rangeRef.addEventListener('input', event => {
  textRef.style.fontSize = `${event.target.value}px`;
});
