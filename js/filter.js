import { renderThumbnails } from './render-thumbnails.js';

const filters = document.querySelector('.img-filters');
const filtersForm = document.querySelector('.img-filters__form');
const picturesContainer = document.querySelector('.pictures');

const getFilteringData = (data) => {
  data.sort((a, b) => a.comments.length - b.comments.length);
};

const initFilter = (data) => {
  filters.classList.remove('.img-filters--inactive');
  filtersForm.addEventListener('click', (event) => {
    if (event.target.closest('.img-filters__button')) {
      picturesContainer.querySelectorAll('.picture').forEach((image) => image.remove());
      renderThumbnails(getFilteringData(data));
    }
  });
};

export { initFilter, getFilteringData };
