// eslint-disable-next-line
import items from './gallery-items.js';

const galleryListRef = document.querySelector(
  '.js-gallery',
);
const overlayRef = document.querySelector(
  '.lightbox__content',
);
const modalWinRef = document.querySelector('.js-lightbox');
const imageModalRef = document.querySelector(
  '.lightbox__image',
);
const closeBtnRef = document.querySelector(
  'button[data-action="close-lightbox"]',
);
let imgIndex;

// - Создание и рендер разметки по массиву данных

// Создание одного элемента из списка и присвоение ему классов и атрибутов
const createImg = function (
  link,
  previewImgLink,
  description,
  index,
) {
  // <li class = 'gallery__item'
  const newItem = document.createElement('li');
  newItem.classList.add('gallery__item');
  // li > <a class = 'gallery__link' href = http// link
  const newLink = document.createElement('a');
  newLink.classList.add('gallery__link');
  newLink.setAttribute('href', `${link}`);
  newItem.append(newLink);
  // li > a > <img class = 'gallery__image' src =, alt =, data-source =, data-index =, >
  const newImg = document.createElement('img');
  newImg.classList.add('gallery__image');
  newImg.setAttribute('src', `${previewImgLink}`);
  newImg.setAttribute('data-source', `${link}`);
  newImg.setAttribute('alt', `${description}`);
  newImg.setAttribute('data-index', `${index}`);
  newLink.append(newImg);

  // Возвращает один элемент с вложенностью li > a > img
  return newItem;
};

// Создание галереи
const createGallery = () => {
  const arrImg = [];
  items.forEach(item => {
    const newItem = createImg(
      item.original,
      item.preview,
      item.description,
      items.indexOf(item),
    );
    arrImg.push(newItem);
  });
  galleryListRef.append(...arrImg);
};

createGallery();

// - Реализация делегирования на галерее `ul.js-gallery` и получение `url` и 'alt' большого изображения.
const getOriginalUrl = event => event.target.dataset.source;
const getDescription = event => event.target.alt;

// - Подмена значения атрибута `src` и 'alt' элемента `img.
const imageSetSrc = event => {
  imageModalRef.setAttribute(
    'src',
    `${getOriginalUrl(event)}`,
  );
  imageModalRef.setAttribute(
    'alt',
    `${getDescription(event)}`,
  );
};

// - Открытие модального окна по клику на элементе галереи.
const openModal = event => {
  event.preventDefault(); // Отмена действия по умолчанию
  imageSetSrc(event);
  modalWinRef.classList.add('is-open');
  // Определение индекса текущего изображения
  imgIndex = Number(event.target.dataset.index);
  // установка прослушивателя на клик по кнопке
  closeBtnRef.addEventListener('click', closeModal);
  // установка прослушивателя на 'Escape'
  window.addEventListener('keydown', closeModalEsc);
  // установка прослушивателя на стрелки Влево/Вправо
  window.addEventListener('keydown', keyRightLeftClick);
  // установка прослушивателя на клик по фону
  overlayRef.addEventListener('click', closeModalBackdrop);
};

galleryListRef.addEventListener('click', openModal);

// - Очистка значения атрибута `src` и 'alt' элемента `img.
const imageClearSrc = () => {
  imageModalRef.setAttribute('src', '');
  imageModalRef.setAttribute('alt', '');
};

// - Закрытие модального окна по клику
const closeModal = () => {
  modalWinRef.classList.remove('is-open');
  imageClearSrc();
  // Снятие прослушивателя с клика по кнопке
  closeBtnRef.removeEventListener('click', closeModal);
  // Снятие прослушивателя с 'Escape'
  window.removeEventListener('keydown', closeModalEsc);
  // Снятие прослушивателя с стрелок Влево/Вправо
  window.removeEventListener('keydown', keyRightLeftClick);
  // Снятие прослушивателя с клика по фону
  overlayRef.removeEventListener(
    'click',
    closeModalBackdrop,
  );
};

// - Закрытие модального окна по клику на `div.lightbox__overlay`.
const closeModalBackdrop = event => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
};

// - Закрытие модального окна по нажатию клавиши `ESC`.
const closeModalEsc = event => {
  if (event.code === 'Escape') {
    closeModal();
  }
};

// - Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо"
const keyRightLeftClick = event => {
  if (event.code === 'ArrowRight') {
    if (imgIndex < items.length - 1) {
      imgIndex += 1;
    }
  }
  if (event.code === 'ArrowLeft') {
    if (imgIndex > 0) {
      imgIndex -= 1;
    }
  }
  imageModalRef.setAttribute(
    'src',
    `${items[imgIndex].original}`,
  );
  imageModalRef.setAttribute(
    'alt',
    `${items[imgIndex].description}`,
  );
};
