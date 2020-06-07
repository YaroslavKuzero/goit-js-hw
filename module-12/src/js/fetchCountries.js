import reply from './markUp';

const fetchCountries = searchQuery => {
  fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(res => res.json())
    .then(data => reply(data));
};

export default fetchCountries;
