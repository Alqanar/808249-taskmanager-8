import {
  getRandomInteger,
  createElement
} from '../utils.js';
import {
  createFilterTemplate
} from './createFilterTemplate.js';

const containerElementFilter = document.querySelector(`.main__filter`);
let filterElement = ``;

const createFiltersTemplate = (array) => {
  for (let elementArray of array) {
    filterElement += createFilterTemplate(elementArray, getRandomInteger(0, 10));
  }
  return createElement(filterElement);
};

export const renderFilters = (filterElements) => {
  containerElementFilter.innerHTML = ``;
  return containerElementFilter.appendChild(createFiltersTemplate(filterElements));
};
