import { isEscapeKey, isNotInput } from './util.js';
import { sendData } from './api.js';
import { initScale, resetScale } from './scale.js';
import { initEffects, updateEffects } from './effects-editor.js';
import { initValidation, resetPristine, validatePristine } from './validation.js';
import { showMessage } from './messages.js';

const SEND_URL = 'https://29.javascript.pages.academy/kekstagram';
const SUCCESS_MESSAGE = 'Изображение загружено';
const ERROR_MESSAGE = 'Ошибка загрузки изображения';
const SUCCESS_BUTTON_TEXT = 'Круто!';
const ERROR_BUTTON_TEXT = 'Попробовать еще раз';

const uploadInput = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('.img-upload__cancel');
const uploadForm = document.querySelector('.img-upload__form');
const effectsList = document.querySelector('.effects__list');
const currentEffectValue = effectsList.querySelector('input:checked').value;
const submitButton = document.querySelector('.img-upload__submit');

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
  updateEffects(currentEffectValue);
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const setButtonState = (state) => {
  submitButton.disabled = state;
};

const onUploadInputChange = () => openUploadForm();
const onUploadCancelClick = () => closeUploadForm();

function onDocumentKeydown(event) {
  if (isEscapeKey(event) && !isNotInput(event)) {
    event.preventDefault();
    closeUploadForm();
  }
}

const successUpload = () => {
  showMessage('success', SUCCESS_MESSAGE, SUCCESS_BUTTON_TEXT);
  setButtonState(false);
  closeUploadForm();
};

const errorUpload = () => {
  showMessage('error', ERROR_MESSAGE, ERROR_BUTTON_TEXT);
  setButtonState(false);
};

async function onUploadFormSubmit (event) {
  event.preventDefault();
  if (validatePristine()) {
    setButtonState(true);
    await sendData(SEND_URL, new FormData(event.target), successUpload, errorUpload);
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

