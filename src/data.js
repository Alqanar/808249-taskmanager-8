export const NamesFilterDict = [
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

export const cardsData = [
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

let preparedData = [];

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
  };
};

preparedData = cardsData.map((element) => prepareDataForTemplate(element));

export {
  preparedData as preparedData
};
