import { getData } from './api.js';
import { renderThumbnails } from './render-thumbnails.js';
import { getFilteringData, initFilter } from './filter.js';
import { showMessage } from './messages.js';

const DATA_URL = 'https://29.javascript.pages.academy/kekstagram/data';
const STATE = 'error';
const ERROR_TEXT = 'Ошибка загрузки данных.';
const DELAY = 3000;

const onGetSuccess = (data) => {
  initFilter(data);
  renderThumbnails(data);
};
const onGetError = () => {
  showMessage(STATE, ERROR_TEXT);
  setTimeout(() => {
    showMessage.remove();
  }, DELAY);
};

const initThumbnails = () => {
  getData(DATA_URL, onGetSuccess, onGetError);
};

export { initThumbnails };
