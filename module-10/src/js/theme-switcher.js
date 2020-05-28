const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switcherRef = document.querySelector('input.js-switch-input');
const body = document.querySelector('body');

const switchToDark = function () {
  localStorage.setItem('theme', Theme.DARK);
  if (body.classList.contains(Theme.LIGHT)) {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
  }
  body.classList.add(Theme.DARK);
};

const switchToLight = function () {
  body.classList.replace(Theme.DARK, Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
};

const switchTheme = event => {
  if (event.target.checked) {
    switchToDark();
  } else {
    switchToLight();
  }
};

const themeSet = function () {
  if (localStorage.getItem('theme') !== null) {
    if (localStorage.getItem('theme') === Theme.LIGHT) {
      switcherRef.checked = false;
      body.classList.add(Theme.LIGHT);
    }
    if (localStorage.getItem('theme') === Theme.DARK) {
      switcherRef.checked = true;
      body.classList.add(Theme.DARK);
    }
  }
  body.classList.add(Theme.LIGHT);
};

switcherRef.addEventListener('change', switchTheme);
document.addEventListener('DOMContentLoaded', themeSet);
