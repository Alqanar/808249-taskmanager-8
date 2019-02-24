import {
  getRandomInteger
} from './utils.js';
import {
  renderFilters
} from './filters/renderFilters.js';
import {
  createCardsFragment,
  renderBoardCards
} from './card/card.js';
import {
  NamesFilterDict
} from './filters/namesFilterDict.js';
import {
  preparedData
} from './data.js';


const containerElementFilter = document.querySelector(`.main__filter`);


renderFilters(NamesFilterDict);


renderBoardCards(createCardsFragment(preparedData));


containerElementFilter.addEventListener(
    `click`,
    () => renderBoardCards(
        createCardsFragment(preparedData.slice(0, getRandomInteger(1, 7)))
    )
);
