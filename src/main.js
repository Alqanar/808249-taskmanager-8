import {
  getRandomInteger
} from './utils.js';
import {
  renderFilterTemplate
} from './make-filter.js';
import {
  NamesFilterDict,
  preparedData
} from './data.js';
import {
  createCardsFragment,
  renderBoardCards,
} from './make-card.js';


const containerElementFilter = document.querySelector(`.main__filter`);


renderFilterTemplate(NamesFilterDict);


renderBoardCards(createCardsFragment(preparedData));


containerElementFilter.addEventListener(
    `click`,
    () => renderBoardCards(
        createCardsFragment(preparedData.slice(0, getRandomInteger(1, 7)))
    )
);
