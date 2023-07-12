const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const getArrayElement = (array) => array[getRandomInteger (0, array.length - 1)];
const isEscapeKey = (evt) => evt.key === 'Escape';
export {getRandomInteger, getArrayElement, isEscapeKey};
