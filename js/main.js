const PUBLICATION_COUNT = 25;
const DESCRIPTIONS = ["Золотой закат", "Весенние цветы", "Улыбка на лице", "Горы и небо", "Пляж и океан", "Природная красота", "Игра света и тени", "Мир в капле", "Городская суета", "Летняя свежесть", "Абстрактные формы", "Приключения в горах", "Радость и веселье", "Симметрия и геометрия", "Дикое дикое животное", "Осенние оттенки", "Зимние чудеса", "Граффити и уличное искусство", "Искренние эмоции", "Минимализм и простота", "Магия природы", "Романтика заката", "Детская игра", "Архитектурные детали", "Приятные воспоминания"];

const NAMES = ["Иван Иванов", "Анна Смирнова", "Петр Петров", "Екатерина Кузнецова", "Алексей Васильев", "Мария Попова", "Сергей Александров", "Елена Новикова", "Дмитрий Морозов", "Ольга Петрова", "Николай Соколов", "Юлия Михайлова", "Андрей Лебедев", "Татьяна Ковалева", "Владимир Зайцев"];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const AVATAR_COUNTER = {
  min: 1,
  max: 6
};

const LIKES_COUNTER = {
  min: 15,
  max: 200
};

const COMMENTS_COUNTER = {
  min: 1,
  max: 30
};

let commentId = 1;
let descriptionId = 1;
const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const getArrayElement = (array) => array[getRandomInteger (0, array.length - 1)];


const createComment = () => ({
  id: commentId++,
  avatar:  `img/avatar-${getRandomInteger(AVATAR_COUNTER.min, AVATAR_COUNTER.max)}.svg`,
  message: getArrayElement(MESSAGES),
  name: getArrayElement(NAMES),

});

const createDescription = () => ({
  id: photoId,
  url: `photos/${photoId++}.jpg`,
  description: getArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_COUNTER.min, LIKES_COUNTER.max),
  comments: Array.from({length: getRandomInteger(COMMENTS_COUNTER.min, COMMENTS_COUNTER.max)}, createComments)
});

const createPublication = () => Array.from({length: PUBLICATION_COUNT}, createDescription);

createPublication();
