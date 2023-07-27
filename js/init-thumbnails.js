import { getData } from './api.js';
import { renderThumbnails } from './render-thumbnails.js';
import { initFilters, getFilteringData } from './filters.js';
import { showMessage } from './messages.js';

const DATA_URL = 'https://29.javascript.pages.academy/kekstagram/data';
const ERROR_STATE = 'error';
const ERROR_TEXT = 'Ошибка загрузки данных.';

const currentId = document.querySelector('.img-filters__button--active').id;

const onGetSuccess = (data) => {
  initFilters(data);
  renderThumbnails(getFilteringData(currentId, data));
};

const onGetError = () => showMessage(ERROR_STATE, ERROR_TEXT);

const initThumbnails = () => getData(DATA_URL, onGetSuccess, onGetError);

export { initThumbnails };
