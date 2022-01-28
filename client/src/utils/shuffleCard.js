/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
const shuffleCard = (array) => {
  const { length } = array;

  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * 1);
    const currentIndex = i - 1;
    const temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }

  return array;
};

export default shuffleCard;
