import './styles.css';
import fetchCountries from './js/fetchCountries';
import './js/searchbox';

const debounce = require('lodash.debounce');

const inputRef = document.querySelector('input');
const debouncedFetch = debounce(fetchCountries, 500);

inputRef.addEventListener('input', event => {
  if (event.target.value === '') {
    console.log('pls input name of country');
    const listRef = document.querySelector('.country-list');
    listRef.textContent = '';
    return;
  }
  debouncedFetch(event.target.value);
});

//todo:
// - finish with css on list and country card
// - to clear DOM before showing results
// - minimize time of pnotify
