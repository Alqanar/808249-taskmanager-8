'use strict'

const containerElementFilter = document.querySelector(`.main__filter`);
const containerCards = document.querySelector(`.board__tasks`);
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
    id: 1,
    text: `This is example of new task, you can add picture, set date and time, add tags.`
  },
  {
    id: 2,
    color: `pink`,
    text: `It is example of repeating task. It marks by wave.`,
    repeat: true,
    hashtags: [`repeat`, `cinema`, `entertaiment`]
  },
  {
    id: 3,
    color: `yellow`,
    text: `This is card with missing deadline`,
    hashtags: [`repeat`, `cinema`, `entertaiment`],
    deadline: true
  },
  {
    id: 4,
    color: `yellow`,
    text: `Here is a card with filled data`,
    date: true,
    repeat: true,
    hashtags: [`repeat`, `cinema`, `entertaiment`]
  },
  {
    id: 5,
    color: `blue`,
    hashtags: [`repeat`, `cinema`, `entertaiment`]
  },
  {
    id: 6,
    color: `blue`,
    date: true,
    hashtags: [`repeat`, `cinema`, `entertaiment`]
  },
  {
    id: 7,
    color: `blue`,
    repeat: true
  }
];

const WEEK_DAYS = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'];

let prepareData = [];

const getRandomInteger = (min, max) =>
  min + Math.floor(Math.random() * (max + 1 - min));

const renderFilter = (element) =>
  containerElementFilter.innerHTML = element;

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
renderFilter(filterElement);



const prepareDataForTemplate = (data) => {
  const {
    id,
    color = `black`,
    text = ``,
    date = false,
    repeat = false,
    hashtags = [],
    src,
    deadline = false
  } = data;

  return {
    id,
    color,
    text,
    date,
    repeat,
    hashtags,
    src,
    deadline
  }
}

const renderButtons = () =>
  `<div class="card__control">
    <button type="button" class="card__btn card__btn--edit">
      edit
    </button>
    <button type="button" class="card__btn card__btn--archive">
      archive
    </button>
    <button type="button" class="card__btn card__btn--favorites card__btn--disabled">
      favorites
    </button>
  </div>`;

const renderCardBars = () =>
  `<div class="card__color-bar">
    <svg class="card__color-bar-wave" width="100%" height="10">
      <use xlink:href="#wave"></use>
    </svg>
  </div>`;

const renderText = (taskData) =>
  `<div class="card__textarea-wrap">
    <label>
      <textarea class="card__text" placeholder="Start typing your text here..." name="text">${taskData.text}
      </textarea>
    </label>
  </div>`;

const renderDeadline = (taskData) =>
  `<button class="card__date-deadline-toggle" type="button">
    date: <span class="card__date-status">${taskData.date ? `yes` : `no`}</span>
  </button>

  <fieldset class="card__date-deadline" ${taskData.date ? `` : `disabled`}>
    <label class="card__input-deadline-wrap">
      <input class="card__date" type="text" placeholder="23 September" name="date" />
    </label>
    <label class="card__input-deadline-wrap">
      <input class="card__time" type="text" placeholder="11:15 PM" name="time" />
    </label>
  </fieldset>`;

const createDay = (day, taskData) =>
  `<input
    class="visually-hidden card__repeat-day-input"
    type="checkbox"
    id="repeat-${day}-${taskData.id}"
    name="repeat"
    value="${day}"
  />
  <label class="card__repeat-day" for="repeat-${day}-${taskData.id}">${day}</label>`;

const renderWeekDays = (taskData) =>
  `<div class="card__repeat-days-inner">
    ${WEEK_DAYS.map((element) => createDay(element, taskData)).join(``)}
  </div>`;

const renderRepeat = (taskData) =>
  `<button class="card__repeat-toggle" type="button">
      repeat:<span class="card__repeat-status">${taskData.repeat ? `yes` : `no`}</span>
  </button>
  <fieldset class="card__repeat-days" ${taskData.repeat ? `` : `disabled`}>
   ${renderWeekDays(taskData)}
  </fieldset>`;

const renderDate = (taskData) =>
  `<div class="card__dates">
    ${renderDeadline(taskData)}
    ${renderRepeat(taskData)}
  </diiv`;

const createHashtag = (taskData) => {
  let hashtags = '';
  for (let i = 0; i < taskData.hashtags; i++) {
    hashtags +=
      `<span class="card__hashtag-inner">
        <input type="hidden" name="hashtag" value="repeat" class="card__hashtag-hidden-input">
        <button type="button" class="card__hashtag-name">
          #${taskData.hashtags[i]}
        </button>
        <button type="button" class="card__hashtag-delete">
          delete
        </button>
      </span>`
  }
  return hashtags;
};

const renderHashtags = (taskData) =>
  `<div class="card__hashtag">
    <div class="card__hashtag-list">
      ${createHashtag(taskData)}
    </div>
    
    <label>
      <input type="text" class="card__hashtag-input" name="hashtag-input"
        placeholder="Type new hashtag here" 
      />
    </label>
  </div>`;

const renderDetails = (taskData) =>
  `<div class="card__details">
    ${renderDate(taskData)}
    ${renderHashtags(taskData)}
  </div>`;

const renderSettings = (taskData) =>
  `<div class="card__settings">
    ${renderDetails(taskData)}
  </div>`;

prepareData = cardsData.map((element) => prepareDataForTemplate(element));

const templateCard = (prepareData) => {
  const card = document.createElement('article');
  card.className = `card card--edit card--${prepareData.color} ${prepareData.repeat ? `card--repeat` : ``}`;
  card.innerHTML =
    `<form class="card__form" method="get">
      <div class="card__inner">
        ${renderButtons()}
        ${renderCardBars()}
        ${renderText(prepareData)}
        ${renderSettings(prepareData)}
      </div>
    </form>`;
  return card;
}

containerCards.appendChild(templateCard(prepareData[3]));
