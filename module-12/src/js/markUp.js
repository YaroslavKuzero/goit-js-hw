import '../scss/country-card.scss';
import { error } from '@pnotify/core/dist/PNotify';
import { defaults } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import countryCard from '../templates/country-card.hbs';

defaults.delay = 2000;

const createListFunc = function (data) {
  const countryList = document.querySelector('.country_card');
  const list = document.createElement('ul');
  list.classList.add('country_list');
  data
    .map(item => item.name)
    .forEach(element => {
      const listItem = document.createElement('li');
      listItem.textContent = element;
      list.appendChild(listItem);
    });
  countryList.innerHTML = list.outerHTML;
};

const createCountryCardFunc = function (data) {
  data[0].languages = data[0].languages.map(item => item.name);
  const divMarkUp = countryCard(data[0]);
  const insertRef = document.querySelector('.country_card');
  insertRef.innerHTML = divMarkUp;
}

const reply = function (data) {
  if (data.length > 10) {
    error({
      title: 'Too many matches found.',
      text: 'Please enter a more specific query!',
    });
    return;
  }
  if (data.length === 1) {
    createCountryCardFunc(data);
    return;
  }
  if (data.length === 0) {
    return;
  }
  if (data.status === 404) {
    error('No matches found.');
    return;
  }
  createListFunc(data);
};

export default reply;
