const WEEK_DAYS = [`mo`, `tu`, `we`, `th`, `fr`, `sa`, `su`];
const COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];

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

const renderRepeat = ({id, repeat}) =>
  `<button class="card__repeat-toggle" type="button">
      repeat:<span class="card__repeat-status">${repeat ? `yes` : `no`}</span>
  </button>
  <fieldset class="card__repeat-days" ${repeat ? `` : `disabled`}>
   ${renderWeekDays(id)}
  </fieldset>`;

const renderDate = ({date, id, repeat}) =>
  `<div class="card__dates">
    ${renderDeadline({date})}
    ${renderRepeat({id, repeat})}
  </diiv`;

const createHashtag = (hashtagArray) => {
  let hashtags = ``;
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
      </span>`;
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

const renderDetails = ({date, id, repeat, hashtags}) =>
  `<div class="card__details">
    ${renderDate({date, id, repeat})}
    ${renderHashtag(hashtags)}
  </div>`;

const renderPicture = (pictureDirectory) =>
  `<label class="card__img-wrap ${pictureDirectory === `img/add-photo.svg` ? `card__img-wrap--empty` : ``}">
  <input type="file" class="card__img-input visually-hidden" name="img" />
  <img src=${pictureDirectory} alt="task picture" class="card__img" />
</label>`;

const createColor = (elementColor, {id, color}) =>
  `<input type="radio" id="color-${elementColor}-${id}"
    class="card__color-input card__color-input--${elementColor} visually-hidden" name="color" value=${elementColor}
    ${color === elementColor ? `checked` : ``}
  />
  <label for="color-${elementColor}-${id}" class="card__color card__color--${elementColor}">
    ${elementColor}
  </label>`;

const renderSelectionColor = ({id, color}) =>
  `<div class="card__colors-inner">
    <h3 class="card__colors-title">Color</h3>
    <div class="card__colors-wrap">
      ${COLORS.map((element) => createColor(element, {id, color})).join(``)}
    </div>
  </div>`;

const renderSettings = ({id, color, src, date, repeat, hashtags}) =>
  `<div class="card__settings">
    ${renderDetails({date, id, repeat, hashtags})}
    ${renderPicture(src)}
    ${renderSelectionColor({id, color})}
  </div>`;

const renderStatusButtons = () =>
  `<div class="card__status-btns">
    <button class="card__save" type="submit">save</button>
    <button class="card__delete" type="button">delete</button>
  </div>`;

export const createCardTemplate = ({text, deadline, ...settingsParams}) =>
  `<article
    class =
    "card
    card--${settingsParams.color} 
    ${settingsParams.repeat ? `card--repeat` : ``}
    ${deadline ? `card--deadline` : ``}">
    <form class="card__form" method="get">
      <div class="card__inner">
        ${renderButtons()}
        ${renderCardBars()}
        ${renderText(text)}
        ${renderSettings(settingsParams)}
        ${renderStatusButtons()}
      </div>
    </form>
  </article>`;
