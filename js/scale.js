const SCALE_STEP = 25;
const MAX_SCALE = 100;
const MIN_SCALE = 25;
const DIVIDER = 100;

const imageUpload = document.querySelector('.img-upload__preview img');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlValue = document.querySelector('.scale__control--value');

let currentScale = MAX_SCALE;

const changeScale = (value) => {
  imageUpload.style.transform = `scale(${value / DIVIDER})`;
  scaleControlValue.value = `${value}%`;
};

const onScaleControlBiggerClick = (event) => {
  event.preventDefault();
  if (currentScale < MAX_SCALE) {
    changeScale(currentScale += SCALE_STEP);
  }
};

const onScaleControlSmallerClick = (event) => {
  event.preventDefault();
  if (currentScale > MIN_SCALE) {
    changeScale(currentScale -= SCALE_STEP);
  }

};

const initScale = () => {
  scaleControlBigger.addEventListener('click', onScaleControlBiggerClick);
  scaleControlSmaller.addEventListener('click', onScaleControlSmallerClick);
};
const resetScale = () => {
  currentScale = MAX_SCALE;
  changeScale(MAX_SCALE);
};
export { initScale, resetScale };
