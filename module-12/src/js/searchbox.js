import '../scss/searchbox.scss';

const searchField = document.querySelector('.search');
const searchInput = document.querySelector('.input-search');

const checkSearch = function () {
  const contents = searchInput.value;
  return contents.length
    ? searchField.classList.add('full')
    : searchField.classList.remove('full');
};

searchInput.addEventListener('focus', () =>
  searchField.classList.add('isActive'),
);
searchInput.addEventListener('blur', () => {
  searchField.classList.remove('isActive');
  checkSearch();
});
