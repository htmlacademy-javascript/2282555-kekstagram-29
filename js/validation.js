const HASHTAG_MAX_COUNT = 5;
const COMMENT_MAX_LENGTH = 140;
const HASHTAG_REGEXP = /^#[a-zа-яё0-9]{1,19}$/i;

const COMMENT_LENGTH_INVALID = 'Длина комментария не может составлять больше 140 символов';
const HASHTAG_VALIDITY = 'Введен невалидный хэштег. Попробуйте формат записи #Kekstagram09, длина хештега не должна превышать 20 символов.';
const HASHTAGS_COUNT_INVALID = 'Нельзя указать более пяти хэштегов.';
const DOUBLE_HASHTAGS_INVALID = 'Один и тот же хэштег не может быть использован дважды.';

const uploadForm = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');
const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper'
});

const createHashTags = (value) => value.trim().toLowerCase().split(' ').filter((it) => it);

const checkCommentLength = (value) => value.length <= COMMENT_MAX_LENGTH;

const checkHashtagValidity = (value) => {
  if(!value){
    return true;
  }
  const hashtags = createHashTags(value);
  return hashtags.every((element) => HASHTAG_REGEXP.test(element));
};

const checkHashtagsCount = (value) => {
  const hashtags = createHashTags(value);
  return hashtags.length <= HASHTAG_MAX_COUNT;
};

const checkHashtagsDuplication = (value) => {
  const hashtags = createHashTags(value);
  return hashtags.length === new Set(hashtags).size;
};

const validatePristine = () => pristine.validate();

const resetPristine = () => pristine.reset();

const initValidation = () => {
  pristine.addValidator(textDescription, checkCommentLength, COMMENT_LENGTH_INVALID, 1, true);
  pristine.addValidator(textHashtags, checkHashtagValidity, HASHTAG_VALIDITY, 1, true);
  pristine.addValidator(textHashtags, checkHashtagsCount, HASHTAGS_COUNT_INVALID, 1, true);
  pristine.addValidator(textHashtags, checkHashtagsDuplication, DOUBLE_HASHTAGS_INVALID, 1, true);
};

export { validatePristine, resetPristine, initValidation };
