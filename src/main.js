import {
  getRandomInteger
} from './utils.js';
import {
  renderFilters
} from './filters/renderFilters.js';
import {
  createCardElement
} from './card/createCardElement.js';
import {
  NamesFilterDict
} from './filters/namesFilterDict.js';
import {
  preparedData
} from './data.js';


const containerElementFilter = document.querySelector(`.main__filter`);
const containerCards = document.querySelector(`.board__tasks`);

renderFilters(NamesFilterDict);


const createCardsFragment = (arrayCards) => {
  let cardsFragment = document.createDocumentFragment();
  for (let elementCards of arrayCards) {
    cardsFragment.appendChild(createCardElement(elementCards));
  }
  return cardsFragment;
};

const renderBoardCards = (cardsFragment) => {
  containerCards.innerHTML = ``;
  return containerCards.appendChild(cardsFragment);
};

renderBoardCards(createCardsFragment(preparedData));


containerElementFilter.addEventListener(
    `click`,
    () => renderBoardCards(
        createCardsFragment(preparedData.slice(0, getRandomInteger(1, 7)))
    )
);
