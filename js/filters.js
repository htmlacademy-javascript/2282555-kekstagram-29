import { renderThumbnails } from './render-thumbnails.js';
import { debounce } from './util.js';

const COUNT_PICTURES = 10;
const DELAY = 500;
const FILTER_RANDOM = 'filter-random';
const FILTER_DISCUSSED = 'filter-discussed';

const filters = document.querySelector('.img-filters');
const filtersForm = document.querySelector('.img-filters__form');
const picturesContainer = document.querySelector('.pictures');

const sortByCommentsLength = (data) => data.slice().sort((a, b) => b.comments.length - a.comments.length);

const sortByRandom = (data) => {
  const dataClone = data.slice();
  for (let i = dataClone.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [dataClone[i], dataClone[j]] = [dataClone[j], dataClone[i]];
  }

  return dataClone.slice(0, COUNT_PICTURES);
};

const getFilteringData = (id, data) => {
  if (id === FILTER_RANDOM) {
    return sortByRandom(data);
  }
  if (id === FILTER_DISCUSSED) {
    return sortByCommentsLength(data);
  }

  return data;
};

const renderFilteringPictures = (id, data) => {
  picturesContainer.querySelectorAll('.picture').forEach((picture) => picture.remove());
  renderThumbnails(getFilteringData(id, data));
};

const renderPictures = debounce((id, data) => renderFilteringPictures(id, data), DELAY);

const initFilters = (data) => {
  filters.classList.remove('img-filters--inactive');
  filtersForm.addEventListener('click', (event) => {
    if (event.target.closest('.img-filters__button') && !event.target.closest('.img-filters__button--active')) {
      document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
      event.target.classList.add('img-filters__button--active');
      renderPictures(event.target.id, data);
    }
  });
};

export { getFilteringData, initFilters };

