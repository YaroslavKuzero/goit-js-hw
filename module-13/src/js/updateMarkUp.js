import '../scss/gallery.scss';
import photoCard from '../templates/photo-card.hbs';
import ref from './refs';

const markUpFunc = function (data) {
  const markUp = photoCard(data);
  ref.list.insertAdjacentHTML('beforeend', markUp);
};

export default markUpFunc;
