import { createPublication } from './data.js';
const picturesContainer = document.querySelector('.pictures');
const picture = document.querySelector('#picture').querySelector('.picture');
const data = createPublication();
const fragment = document.createDocumentFragment();

const createThumbnail = (item) => {
  const pictureClone = picture.cloneNode(true);
  const image = pictureClone.querySelector('.picture__img');
  image.src = item.url;
  image.alt = item.description;
  pictureClone.querySelector('.picture__likes').textContent = item.likes;
  pictureClone.querySelector('.picture__comments').textContent = item.comments.length;
  fragment.append(pictureClone);
};
const renderThumbnails = () => {
  data.forEach((item) => createThumbnail(item));
  picturesContainer.append(fragment);
};

export {renderThumbnails};
