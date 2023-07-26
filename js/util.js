
const isEscapeKey = (evt) => evt.key === 'Escape';
const isNotInput = (event) => !event.target.closest('input') || !event.target.closest('textarea');

const debounce = (callback, timeoutDelay) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { isEscapeKey, isNotInput, debounce};
