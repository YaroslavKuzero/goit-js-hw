import './styles.css';
import './scss/gallery.scss';
import './scss/search-form.scss';
import photoService from './js/apiService';
import refs from './js/refs';
import markUpFunc from './js/updateMarkUp';
import './js/loadMoreBtn';

refs.keyWord.addEventListener('submit', event => {
  event.preventDefault();
  photoService.resetPage();
  photoService.query = event.currentTarget[0].value;
  refs.list.innerHTML = '';
  event.currentTarget.reset();
  photoService.fetchPhotos().then(markUpFunc);
  refs.loadMore.classList.remove('is-hidden');
});


refs.loadMore.addEventListener('click', e => {
  e.stopImmediatePropagation();
  photoService.fetchPhotos().then(markUpFunc);
});

// [] Страница должна автоматически плавно проскроливаться после рендера изображений ровно на один экран, чтобы перевести пользователя на начало загруженных изображений. Используй [window.scrollTo()](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo).

// []- Можно добавить плагин нотификаций, например [pnotify](https://github.com/sciactive/pnotify), и показывать нотификации на результат HTTP-запросов

// []- Можно добавить функционал отображения большой версии изображения через плагин модального окна, например [basicLightbox](https://basiclightbox.electerious.com/), при клике на изображение галереи

// -[] Прикрутить кнопку подняться наверх
