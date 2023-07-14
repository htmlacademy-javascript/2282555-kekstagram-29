import { isEscapeKey, isNotInput } from './util.js';
import { initScale, resetScale } from './scale.js';
const uploadInput = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('.img-upload__cancel');
const uploadForm = document.querySelector('.img-upload__form');

const openUploadForm = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeUploadForm = () => {
  uploadForm.reset();
  resetScale();
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const onUploadInputChange = () => openUploadForm();
const onUploadFormSubmit = (event) => {
  event.preventDefault();
};
const onUploadCancelClick = () => closeUploadForm();

function onDocumentKeydown(event) {
  if (isEscapeKey(event) && isNotInput(event)) {
    event.preventDefault();
    closeUploadForm();
  }
}

const initUploadForm = () => {
  initScale();
  uploadInput.addEventListener('change', onUploadInputChange);
  uploadForm.addEventListener('submit', onUploadFormSubmit);
  uploadCancel.addEventListener('click', onUploadCancelClick);
};

export { initUploadForm };
