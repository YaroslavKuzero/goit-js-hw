import markUpFunc from './updateMarkUp';
import { loader, loaded } from './spinner';
import photoService from './apiService';

const contLoad = function () {
  loader();
  photoService.fetchPhotos().then(data => {
    markUpFunc(data);
    loaded();
    window.scrollBy({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });
};

export default contLoad;
