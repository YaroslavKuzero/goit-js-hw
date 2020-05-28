import menuTemplate from '../templates/menu-item.hbs';
import menu from '../menu.json';

const markUp = menuTemplate(menu);
const listRef = document.querySelector('.js-menu');

listRef.insertAdjacentHTML('beforeend', markUp);
