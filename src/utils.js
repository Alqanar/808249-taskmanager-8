export const getRandomInteger = (min, max) =>
  min + Math.floor(Math.random() * (max + 1 - min));


export const createElement = (html) => {
  const template = document.createElement(`template`);
  template.innerHTML = html;
  return template.content;
};

const getRandomComparator = () =>
  Math.random() - 0.5;

export const getMixedArray = (list) =>
  list.slice(0).sort(getRandomComparator);

export const getRandomBoolean = () => getRandomInteger(0, 100) < 50;
