import { createPublication } from './data.js';
const picturesContainer = document.querySelector('.pictures');
const picture = document.querySelector('#picture').querySelector('.picture');
const data = createPublication();
const fragment = document.createDocumentFragment();

const createThumbnail = (item) => {
  const pictureClone = picture.cloneNode(true);
  pictureClone.querySelector('.picture_img').src = item.url;
  pictureClone.querySelector('.picture_img').alt = item.description;
  pictureClone.querySelector('.picture_likes').textContent = item.likes;
  pictureClone.querySelector('.picture_comments').textContent = item.comments.length;
  fragment.appendChild(pictureClone);
};
const renderThumbnails = () => {
  data.forEach((item) => createThumbnail(item));
  console.log(fragment);
}
renderThumbnails();
export { renderThumbnails };
