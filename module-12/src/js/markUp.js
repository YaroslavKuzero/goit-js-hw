import { error } from '@pnotify/core/dist/PNotify';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import countryCard from '../templates/country-card.hbs';

const markUpFunc = function (data) {
  const markUpArr = [];
  data
    .map(item => item.name)
    .forEach(element => {
      const listItem = document.createElement('li');
      listItem.textContent = element;
      markUpArr.push(listItem);
    });
  const listRef = document.querySelector('.country-list');
  listRef.append(...markUpArr);
};

const reply = function (data) {
  if (data.length > 10) {
    error({
      title: 'Too many matches found.',
      text: 'Please enter a more specific query!',
    });
    console.log(data);
    return;
  }
  if (data.length === 1) {
    data[0].languages = data[0].languages.map(item => item.name);
    const divMarkUp = countryCard(data[0]);
    const insertRef = document.querySelector('.country_card');
    insertRef.insertAdjacentHTML('beforeend', divMarkUp);
    return;
  }
  if (data.status === 404) {
    error('No matches found.');
    return;
  }
  markUpFunc(data);
};

export default reply;
