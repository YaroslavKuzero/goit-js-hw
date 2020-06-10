import './styles.css';
import fetchCountries from './js/fetchCountries';
import './js/searchbox';

const debounce = require('lodash.debounce');

const inputRef = document.querySelector('input');
const debouncedFetch = debounce(fetchCountries, 500);

inputRef.addEventListener('input', event => {
  if (event.target.value === '') {
    const listRef = document.querySelector('.country_card');
    listRef.textContent = '';
    return;
  }
  debouncedFetch(event.target.value);
});
