'use strict'

const containerCards = document.querySelector(`.board__tasks`);
let filterElement = ``;

const NamesFilterDict = [
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
    hashtags: [`repeat`, `cinema`, `entertaiment`],
    src: `img/sample-img.jpg`
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
    hashtags: [`repeat`, `cinema`, `entertaiment`],
    src: `img/sample-img.jpg`
  },
  {
    id: 7,
    color: `blue`,
    repeat: true
  }
];

const WEEK_DAYS = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'];

const COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];

let preparedData = [];

const getRandomInteger = (min, max) =>
  min + Math.floor(Math.random() * (max + 1 - min));

const renderFilterElement = (element) => {
  const containerElementFilter = document.querySelector(`.main__filter`);
  return containerElementFilter.innerHTML = element;
}

const createFilterElement = (filter, count) =>
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

const renderFilterTemplate = (array) => {
  for (let i = 0; i < array.length; i++) {
    filterElement += createFilterElement(array[i], getRandomInteger(0, 10));
  }
  renderFilterElement(filterElement);
};

renderFilterTemplate(NamesFilterDict)



const prepareDataForTemplate = (data) => {
  const {
    id,
    color = `black`,
    text = ``,
    date = false,
    repeat = false,
    hashtags = [],
    src = `img/add-photo.svg`,
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

const renderText = (text) =>
  `<div class="card__textarea-wrap">
    <label>
      <textarea class="card__text" placeholder="Start typing your text here..." name="text">${text}
      </textarea>
    </label>
  </div>`;

const renderDeadline = (date) =>
  `<button class="card__date-deadline-toggle" type="button">
    date: <span class="card__date-status">${date ? `yes` : `no`}</span>
  </button>

  <fieldset class="card__date-deadline" ${date ? `` : `disabled`}>
    <label class="card__input-deadline-wrap">
      <input class="card__date" type="text" placeholder="23 September" name="date" />
    </label>
    <label class="card__input-deadline-wrap">
      <input class="card__time" type="text" placeholder="11:15 PM" name="time" />
    </label>
  </fieldset>`;

const createDay = (day, id) =>
  `<input
    class="visually-hidden card__repeat-day-input"
    type="checkbox"
    id="repeat-${day}-${id}"
    name="repeat"
    value="${day}"
  />
  <label class="card__repeat-day" for="repeat-${day}-${id}">${day}</label>`;

const renderWeekDays = (id) =>
  `<div class="card__repeat-days-inner">
    ${WEEK_DAYS.map((element) => createDay(element, id)).join(``)}
  </div>`;

const renderRepeat = ({ id, repeat }) =>
  `<button class="card__repeat-toggle" type="button">
      repeat:<span class="card__repeat-status">${repeat ? `yes` : `no`}</span>
  </button>
  <fieldset class="card__repeat-days" ${repeat ? `` : `disabled`}>
   ${renderWeekDays(id)}
  </fieldset>`;

const renderDate = ({ date, id, repeat }) =>
  `<div class="card__dates">
    ${renderDeadline({ date })}
    ${renderRepeat({ id, repeat })}
  </diiv`;

const createHashtag = (hashtagArray) => {
  let hashtags = '';
  for (let hashtag of hashtagArray) {
    hashtags +=
      `<span class="card__hashtag-inner">
        <input type="hidden" name="hashtag" value="repeat" class="card__hashtag-hidden-input">
        <button type="button" class="card__hashtag-name">
          #${hashtag}
        </button>
        <button type="button" class="card__hashtag-delete">
          delete
        </button>
      </span>`
  }
  return hashtags;
};

const renderHashtag = (hashtags) =>
  `<div class="card__hashtag">
    <div class="card__hashtag-list">
      ${createHashtag(hashtags)}
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
    ${renderHashtag(taskData.hashtags)}
  </div>`;

const renderPicture = (pictureDirectory) =>
  `<label class="card__img-wrap ${pictureDirectory === `img/add-photo.svg` ? `card__img-wrap--empty` : ``}">
  <input type="file" class="card__img-input visually-hidden" name="img" />
  <img src=${pictureDirectory} alt="task picture" class="card__img" />
</label>`;

const createColor = (elementColor, { id, color }) =>
  `<input type="radio" id="color-${elementColor}-${id}"
    class="card__color-input card__color-input--${elementColor} visually-hidden" name="color" value=${elementColor}
    ${color === elementColor ? `checked` : ``}
  />
  <label for="color-${elementColor}-${id}" class="card__color card__color--${elementColor}">
    ${elementColor}
  </label>`;

const renderSelectionColor = ({ id, color }) =>
  `<div class="card__colors-inner">
    <h3 class="card__colors-title">Color</h3>
    <div class="card__colors-wrap">
      ${COLORS.map((element) => createColor(element, { id, color })).join(``)}
    </div>
  </div>`;

const renderSettings = (taskData) =>
  `<div class="card__settings">
    ${renderDetails(taskData)}
    ${renderPicture(taskData.src)}
    ${renderSelectionColor(taskData)}
  </div>`;

const renderStatusButtons = () =>
  `<div class="card__status-btns">
    <button class="card__save" type="submit">save</button>
    <button class="card__delete" type="button">delete</button>
  </div>`

preparedData = cardsData.map((element) => prepareDataForTemplate(element));

const renderCardElement = (preparedData) => {
  const card = document.createElement('article');
  card.className =
    `card
    card--${preparedData.color} 
    ${preparedData.repeat ? `card--repeat` : ``}
    ${preparedData.deadline ? `card--deadline` : ``}`;
  card.innerHTML =
    `<form class="card__form" method="get">
      <div class="card__inner">
        ${renderButtons()}
        ${renderCardBars()}
        ${renderText(preparedData.text)}
        ${renderSettings(preparedData)}
        ${renderStatusButtons()}
      </div>
    </form>`;
  return card;
}

const createCardsFragment = (preparedData) => {
  let cardsFragment = document.createDocumentFragment();
  for (let data of preparedData) {
    cardsFragment.appendChild(renderCardElement(data));
  }
  return cardsFragment;
}

const renderBoardCards = (cardsFragment) => {
  containerCards.innerHTML = ``;
  return containerCards.appendChild(cardsFragment);
}

renderBoardCards(createCardsFragment(preparedData));


