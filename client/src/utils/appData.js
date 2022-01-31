import * as images from "../assets/images";

// every fruits to make the game
const gameGrid = [
  {
    type: "Apricot",
    image: images.apricot,
    isFound: false,
  },
  {
    type: "Banana",
    image: images.banana,
    isFound: false,
  },
  {
    type: "Blueberry",
    image: images.blueberry,
    isFound: false,
  },
  {
    type: "Cherry",
    image: images.cherry,
    isFound: false,
  },
  {
    type: "Grape",
    image: images.grape,
    isFound: false,
  },
  {
    type: "GreenApple",
    image: images.greenApple,
    isFound: false,
  },
  {
    type: "GreenLemon",
    image: images.greenLemon,
    isFound: false,
  },
  {
    type: "Lemon",
    image: images.lemon,
    isFound: false,
  },
  {
    type: "Mulberry",
    image: images.mulberry,
    isFound: false,
  },
  {
    type: "Raspberry",
    image: images.raspberry,
    isFound: false,
  },
  {
    type: "RedApple",
    image: images.redApple,
    isFound: false,
  },
  {
    type: "RedOrange",
    image: images.redOrange,
    isFound: false,
  },
  {
    type: "Strawberry",
    image: images.strawberry,
    isFound: false,
  },
  {
    type: "Watermelon",
    image: images.watermelon,
    isFound: false,
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

// Scoreboard header with ones that could be sorted or not.
export const scoreHeaderFilter = [
  {
    label: "Rank",
    isSorted: false,
  },
  {
    label: "Time",
    isSorted: false,
  },
];

export default gameGrid;
