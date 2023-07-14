const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const getArrayElement = (array) => array[getRandomInteger (0, array.length - 1)];
const isEscapeKey = (evt) => evt.key === 'Escape';
const isNotInput = (event) => !event.target.closest('input') || !event.target.closest('textarea');
export {getRandomInteger, getArrayElement, isEscapeKey, isNotInput};
