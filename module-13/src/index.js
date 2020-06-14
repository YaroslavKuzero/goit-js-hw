import './styles.css';
import './scss/search-form.scss';
import 'basiclightbox/src/styles/main.scss';
import * as basicLightbox from 'basiclightbox';
import photoService from './js/apiService';
import refs from './js/refs';
import contLoad from './js/contentLoading';
import goToTop from './js/goToTop';

refs.keyWord.addEventListener('submit', event => {
  event.preventDefault();
  photoService.resetPage();
  photoService.query = event.currentTarget[0].value;
  refs.list.innerHTML = '';
  event.currentTarget.reset();
  contLoad();
  refs.loadMore.classList.remove('is-hidden');
});

refs.loadMore.addEventListener('click', contLoad);

refs.list.addEventListener('click', event => {
  console.dir(event.target.dataset.source);
  basicLightbox.create(`<img src="${event.target.dataset.source}"/>`).show();
});

goToTop();
