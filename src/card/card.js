import {
  createElement
} from '../utils.js';
import {
  createCardTemplate
} from './createCardTemplate.js';

const containerCards = document.querySelector(`.board__tasks`);

export const createCardsFragment = (dataArray) => {
  let cardsFragment = document.createDocumentFragment();
  for (let data of dataArray) {
    cardsFragment.appendChild(createElement(createCardTemplate(data)));
  }
  return cardsFragment;
};

export const renderBoardCards = (cardsFragment) => {
  containerCards.innerHTML = ``;
  return containerCards.appendChild(cardsFragment);
};
