'use strict'

const containerElementFilter = document.querySelector(`.main__filter`);
let filterElement = ``;

const namesFilterDict = [
  {
    id: `filter__all`,
    label: `ALL`
  },
  {
    id: `filter__overdue`,
    label: `OVERDUE`
  },
  {
    id: `filter__today`,
    label: `TODAY`
  },
  {
    id: `filter__favorites`,
    label: `FAVORITES`
  },
  {
    id: `filter__repeating`,
    label: `REPEATING`
  },
  {
    id: `filter__tags`,
    label: `TAGS`
  },
  {
    id: `filter__archive`,
    label: `ARCHIVE`
  }
];

const getRandomInteger = (min, max) =>
  min + Math.floor(Math.random() * (max + 1 - min));

const render = (element) => {
  containerElementFilter.innerHTML = element;
}

const createFilter = (filter, count) =>
  `<input
    type="radio"
    id="${filter.id}"
    class="filter__input visually-hidden"
    name="filter"
    ${count <= 0 ? `disabled` : ``}
    />
    <label for="${filter.id}" class="filter__label">
    ${filter.label} <span class="filter__all-count">${count}</span></label
  >`;

for (let i = 0; i < namesFilterDict.length; i++) {
  filterElement += createFilter(namesFilterDict[i], getRandomInteger(0, 10));
}
render(filterElement);

