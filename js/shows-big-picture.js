import { isEscapeKey } from './util.js';

const bigPictureContainer = document.querySelector('.big-picture');
const buttonClose = document.querySelector('.big-picture__cancel');
const commentsCount = document.querySelector('.social__comment-count');
const bigPictureImage = document.querySelector('.big-picture__img img');
const bigPictureDescription = document.querySelector('.social__caption');
const bigPictureLikes = document.querySelector('.likes-count');
const commentsContainer = document.querySelector('.social__comments');
const commentsTemplate = document.querySelector('.social__comment');
const commentsLoader = document.querySelector('.comments-loader');

const COMMENT_COUNTER = 5;
let showingComments = 0;
let comments;

const fillCommentsCounter = () =>{
  commentsCount.innerHTML = `${showingComments}из <span class="comments-count">${comments.length}</span> комментариев</div>`;
};

const setButtonState = () => {
  if (showingComments >= comments.length) {
    commentsLoader.classList.add('hidden');
    return;
  }
  commentsLoader.classList.remove('hidden');
};

const createComment = (item) => {
  const newComment = commentsTemplate.cloneNode(true);
  const image = newComment.querySelector('.social__picture');
  image.src = item.avatar;
  image.alt = item.name;
  newComment.querySelector('.social__text').textContent = item.message;
  return newComment;
};
const renderComments = () => {
  const fragment = document.createDocumentFragment();
  const currentComments = comments.slice(showingComments, showingComments + COMMENT_COUNTER);
  showingComments = Math.min(showingComments + COMMENT_COUNTER, comments.length);
  currentComments.forEach((comment) => fragment.append(createComment(comment)));
  commentsContainer.append(fragment);
  setButtonState();
  fillCommentsCounter();
};
const onCommentsLoaderClick = (event) => {
  event.preventDefault();
  renderComments();
};

const openModal = () => {
  bigPictureContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');
  buttonClose.addEventListener('click', onButtonCloseClick);
  document.addEventListener('keydown', onDocumentKeydown);
  commentsLoader.addEventListener('click', onCommentsLoaderClick);
};
const closeModal = () => {
  bigPictureContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  buttonClose.removeEventListener('click', onButtonCloseClick);
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsLoader.removeEventListener('click', onCommentsLoaderClick);
  showingComments = 0;
};

const fillModal = (data) => {
  bigPictureDescription.textContent = data.description;
  bigPictureImage.src = data.url;
  bigPictureLikes.textContent = data.likes;
  renderComments();
};

function onDocumentKeydown(event) {
  if (isEscapeKey(event) && !event.target.closest('.social__footer-text')) {
    event.preventDefault();
    closeModal();
  }
}

function onButtonCloseClick(event) {
  event.preventDefault();
  closeModal();
}

const showsBigPicture = (data) => {
  commentsContainer.innerHTML = '';
  comments = data.comments;
  fillModal(data);
  openModal();
};
export { showsBigPicture };
