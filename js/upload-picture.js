import { isEscapeKey, isNotInput } from './util.js';
import { initScale, resetScale } from './scale.js';
import { initEffects, updateEffects } from './effects-editor.js';
import { initValidation, resetPristine, validatePristine } from './validation.js';

const uploadInput = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('.img-upload__cancel');
const uploadForm = document.querySelector('.img-upload__form');
const effectsList = document.querySelector('.effects__list');
const currentEffectValue = effectsList.querySelector('input:checked').value;

const onEffectListChange = (event) => updateEffects(event.target.value);

const openUploadForm = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeUploadForm = () => {
  uploadForm.reset();
  resetScale();
  resetPristine();
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  updateEffects(currentEffectValue);
};

const onUploadInputChange = () => openUploadForm();
const onUploadFormSubmit = (event) => {
  if(!validatePristine()){
    event.preventDefault();
  }
};

const onUploadCancelClick = () => closeUploadForm();

function onDocumentKeydown(event) {
  if (isEscapeKey(event) && isNotInput(event)) {
    event.preventDefault();
    closeUploadForm();
  }
}

const initUploadForm = () => {
  initValidation();
  initScale();
  initEffects(currentEffectValue);
  effectsList.addEventListener('change', onEffectListChange);
  uploadInput.addEventListener('change', onUploadInputChange);
  uploadForm.addEventListener('submit', onUploadFormSubmit);
  uploadCancel.addEventListener('click', onUploadCancelClick);
};

export { initUploadForm };

