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

export const preparedData = cardsData.map((element) => prepareDataForTemplate(element));
