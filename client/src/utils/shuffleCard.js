/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
const shuffleCard = (array) => {
  const { length } = array;

  /// Fisher-Yates Shuffle in javascript
  for (let i = length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

export default shuffleCard;
