import {
  getMixedArray,
  getRandomInteger,
  getRandomBoolean
} from './utils.js';

const colors = [
  `black`,
  `pink`,
  `yellow`,
  `blue`,
  `green`
];

const titles = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`
];

const hashtags = [
  `repeat`,
  `cinema`,
  `entertaiment`,
  `homework`,
  `theory`,
  `practice`,
  `intensive`,
  `keks`];

const weekDays = [`mo`, `tu`, `we`, `th`, `fr`, `sa`, `su`];

const MS_IN_WEEK = 7 * 24 * 60 * 60 * 1000;

const getRandomDate = () => {
  if (getRandomBoolean()) {
    let dueDate = Date.now();
    const isFuture = getRandomBoolean();

    if (isFuture) {
      dueDate += getRandomInteger(0, MS_IN_WEEK);
    } else {
      dueDate -= getRandomInteger(0, MS_IN_WEEK);
    }

    return {
      value: new Date(dueDate),
      isDeadline: dueDate < Date.now()
    };
  } else {
    return {
      value: undefined,
      isDeadline: false
    };
  }
};

let getDataCards = () => {
  let dataCards = [];
  for (let i = 1; i < 8; i++) {
    const dataCard = {
      id: i,
      color: colors[getRandomInteger(0, colors.length - 1)],
      text: titles[getRandomInteger(0, titles.length - 1)],
      date: getRandomDate(),
      repeat: getRandomBoolean(),
      hashtags: getMixedArray(hashtags).slice(0, getRandomInteger(0, 2)),
      src: `http://picsum.photos/100/100?r=${Math.random()}`,
      weekDays: weekDays.map((name) => ({name, boolean: getRandomBoolean()}))
      // deadline: false
    };
    dataCards.push(dataCard);
  }
  return dataCards;
};

export const preparedData = getDataCards();
