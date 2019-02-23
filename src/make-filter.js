import {
  getRandomInteger
} from './utils.js';

let filterElement = ``;
const containerElementFilter = document.querySelector(`.main__filter`);

const createFilterTemplate = (filter, count) =>
  `<input
    type="radio"
    id="${filter.id}"
    class="filter__input visually-hidden"
    name="filter"
    ${filter.checked ? `checked` : ``}
    ${count <= 0 ? `disabled` : ``}
    />
    <label for="${filter.id}" class="filter__label">
    ${filter.label} <span class="filter__all-count">${count}</span></label
  >`;

const renderFilterElement = (element) => {
  containerElementFilter.innerHTML = element;
};

export const renderFilterTemplate = (array) => {
  for (let elementArray of array) {
    filterElement += createFilterTemplate(elementArray, getRandomInteger(0, 10));
  }
  renderFilterElement(filterElement);
};
