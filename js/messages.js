import {isEscapeKey} from './util.js';

let message;
let isOpen = false;

const createElement = (template) => {
  const div = document.createElement('div');
  div.innerHTML = template;
  return div.firstChild;
};


const createTemplate = (state, text, buttonText) => (
  `<section class="${state}">
    <div class="${state}__inner">
      <h2 class="${state}__title">${text}</h2>
      ${buttonText ? `<button type="button" class="${state}__button">${buttonText}</button>` : ''}
    </div>
  </section>`
);

const onDocumentKeydown = (event) =>{
  if (isEscapeKey(event)){
    event.stopPropagation();
    event.preventDefault();
    closeMessage();
  }
};

function closeMessage() {
  message.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  if (!isOpen) {
    document.body.classList.remove('modal-open');
  }
}

const showMessage = (state, text, buttonText) => {
  isOpen = false;
  message = createElement(createTemplate(state, text, buttonText));
  document.body.append(message);
  message.addEventListener('click', (event) => {
    if(!event.target.closest(`.${state}__inner`)) {
      event.preventDefault();
      closeMessage();
    }
  });
  document.addEventListener('keydown', onDocumentKeydown);
  if (buttonText) {
    message.querySelector(`.${state}__button`).addEventListener('click', closeMessage);
  }
  if (!document.body.classList.contains('modal-open')) {
    document.body.classList.add('modal-open');
    return;
  }
  isOpen = true;
};

export { showMessage };
