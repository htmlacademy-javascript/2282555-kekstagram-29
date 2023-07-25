import { showMessage } from './messages.js';
import { openUploadForm } from './upload-form.js';

const FILE_EXTENSIONS = ['.jpg', '.png', '.jpeg', '.gif', '.webp', '.avif'];
const ERROR_EXTENSION_MESSAGE = 'Неверный формат файла';
const ERROR_BUTTON_TEXT = 'Попробовать другой файл';

const preview = document.querySelector('.img-upload__preview img');
const filtersPreviews = document.querySelectorAll('.effects__preview');

const renderUploadPicture = (event) => {
  const file = event.target.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_EXTENSIONS.some((it) => fileName.endsWith(it));
  if (matches) {
    const url = URL.createObjectURL(file);
    preview.src = url;
    filtersPreviews.forEach((filtersPreview) => {
      filtersPreview.style.backgroundImage = `url(${url})`;
      openUploadForm();
    });
    return;
  }
  showMessage('error', ERROR_EXTENSION_MESSAGE, ERROR_BUTTON_TEXT);
};

export { renderUploadPicture };
