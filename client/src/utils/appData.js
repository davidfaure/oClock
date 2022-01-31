import * as images from "../assets/images";

// every fruits to make the game
const gameGrid = [
  {
    type: "Apricot",
    image: images.apricot,
  },
  {
    type: "Banana",
    image: images.banana,
  },
  {
    type: "Blueberry",
    image: images.blueberry,
  },
  {
    type: "Cherry",
    image: images.cherry,
  },
  {
    type: "Grape",
    image: images.grape,
  },
  {
    type: "GreenApple",
    image: images.greenApple,
  },
  {
    type: "GreenLemon",
    image: images.greenLemon,
  },
  {
    type: "Lemon",
    image: images.lemon,
  },
  {
    type: "Mulberry",
    image: images.mulberry,
  },
  {
    type: "Raspberry",
    image: images.raspberry,
  },
  {
    type: "RedApple",
    image: images.redApple,
  },
  {
    type: "RedOrange",
    image: images.redOrange,
  },
  {
    type: "Strawberry",
    image: images.strawberry,
  },
  {
    type: "Watermelon",
    image: images.watermelon,
  },
];

// to display 3 stars when you win
export const starScore = [
  { id: 1, image: images.starFilled },
  { id: 3, image: images.starFilled },
  { id: 3, image: images.starFilled },
];

// display 3 EMPTY star when you loose
export const emptyScore = [
  { id: 1, image: images.starEmpty },
  { id: 3, image: images.starEmpty },
  { id: 3, image: images.starEmpty },
];

// Scoreboard header with ones that could be sorted or not.
export const scoreHeader = [
  {
    label: "Rank",
    isSorted: false,
  },
  {
    label: "Player",
    isSorted: true,
    sort: "user",
  },
  {
    label: "Time",
    isSorted: true,
    sort: "time",
  },
  {
    label: "Score",
    isSorted: true,
    sort: "score",
  },
];

export default gameGrid;
