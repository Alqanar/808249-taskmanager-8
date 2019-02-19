'use strict'

const containerElementFilter = document.querySelector(`.main__filter`);
let filterElement = ``;

const namesFilterDict = [
  {
    id: `filter__all`,
    label: `ALL`,
    checked: true
  },
  {
    id: `filter__overdue`,
    label: `OVERDUE`,
    checked: false
  },
  {
    id: `filter__today`,
    label: `TODAY`,
    checked: false
  },
  {
    id: `filter__favorites`,
    label: `FAVORITES`,
    checked: false
  },
  {
    id: `filter__repeating`,
    label: `REPEATING`,
    checked: false
  },
  {
    id: `filter__tags`,
    label: `TAGS`,
    checked: false
  },
  {
    id: `filter__archive`,
    label: `ARCHIVE`,
    checked: false
  }
];

const cardsData = [
  {
    color: `black`,
    text: `This is example of new task, you can add picture, set date and time, add tags.`,
    data: `no`,
    repeat: `no`,
    hashtags: [],
    deadline: false
  },
  {
    color: `pink`,
    text: `It is example of repeating task. It marks by wave.`,
    data: `no`,
    repeat: `yes`,
    hashtags: [`#repeat`, `#cinema`, `#entertaiment`],
    deadline: false
  },
  {
    color: `yellow`,
    text: `This is card with missing deadline`,
    data: `no`,
    repeat: `no`,
    hashtags: [`#repeat`, `#cinema`, `#entertaiment`],
    deadline: true
  },
  {
    color: `yellow`,
    text: `Here is a card with filled data`,
    data: `yes`,
    repeat: `yes`,
    hashtags: [`#repeat`, `#cinema`, `#entertaiment`],
    deadline: false
  },
  {
    color: `blue`,
    text: ``,
    data: `no`,
    repeat: `no`,
    hashtags: [`#repeat`, `#cinema`, `#entertaiment`],
    deadline: false
  },
  {
    color: `blue`,
    text: ``,
    data: `yes`,
    repeat: `no`,
    hashtags: [`#repeat`, `#cinema`, `#entertaiment`],
    deadline: false
  },
  {
    color: `blue`,
    text: ``,
    data: `no`,
    repeat: `yes`,
    hashtags: [],
    deadline: false
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
    ${filter.checked ? `checked` : ``}
    ${count <= 0 ? `disabled` : ``}
    />
    <label for="${filter.id}" class="filter__label">
    ${filter.label} <span class="filter__all-count">${count}</span></label
  >`;

for (let i = 0; i < namesFilterDict.length; i++) {
  filterElement += createFilter(namesFilterDict[i], getRandomInteger(0, 10));
}
render(filterElement);

