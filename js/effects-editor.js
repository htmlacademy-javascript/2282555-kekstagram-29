const EFFECTS = {
  'chrome': {
    name: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  'sepia': {
    name: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  'marvin': {
    name: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  'phobos': {
    name: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  'heat': {
    name: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  },
  default: {
    name: 'default',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
};

const uploadPreview = document.querySelector('.img-upload__preview');
const slider = document.querySelector('.effect-level__slider');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const effectSaturation = document.querySelector('.effect-level__value');

const onSliderUpdate = (name, unit) => {
  if (slider.noUiSlider) {
    slider.noUiSlider.off('update');
  }
  slider.noUiSlider.on('update', () => {
    const saturation = slider.noUiSlider.get();
    uploadPreview.style.filter = `${name}(${saturation}${unit})`;
    effectSaturation.value = saturation;
  });
};

const setContainerState = (value) => {
  if (value === 'none') {
    sliderContainer.classList.add('hidden');
    uploadPreview.style.filter = 'none';
  } else {
    sliderContainer.classList.remove('hidden');
  }
};

const initEffects = (value) => {
  const { min, max, step, name, unit } = EFFECTS[value] || EFFECTS.default;
  setContainerState(value);
  noUiSlider.create(slider, {
    range: {
      min: min,
      max: max
    },
    step: step,
    start: max,
    connect: 'lower',
  });

  onSliderUpdate(name, unit);
};

const updateEffects = (value) => {
  setContainerState(value);
  if (value === 'none') {
    return;
  }
  const { min, max, step, name, unit } = EFFECTS[value] || EFFECTS.default;

  slider.noUiSlider.updateOptions({
    range: {
      'min': min,
      'max': max
    },
    step: step,
    start: max,
  });

  onSliderUpdate(name, unit);
};

export { initEffects, updateEffects };
