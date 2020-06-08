import '../scss/searchbox.scss';

const searchField = document.querySelector('.search');
const searchInput = document.querySelector(".input-search");

const checkSearch = function () {
  const contents = searchInput.value;
  if (contents.length !== 0) {
    searchField.classList.add('full');
  } else {
    searchField.classList.remove('full');
  }
};

searchInput.addEventListener('focus', () =>
  searchField.classList.add('isActive'),
);
searchInput.addEventListener('blur', () => {
  searchField.classList.remove('isActive');
  checkSearch();
});
