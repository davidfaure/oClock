import * as images from "../assets/images";

// every fruits to make the game
const gameGrid = [
  {
    id: 1,
    type: "Apricot",
    image: images.apricot,
    isFound: false,
  },
  {
    id: 2,
    type: "Banana",
    image: images.banana,
    isFound: false,
  },
  {
    id: 3,
    type: "Blueberry",
    image: images.blueberry,
    isFound: false,
  },
  {
    id: 4,
    type: "Cherry",
    image: images.cherry,
    isFound: false,
  },
  {
    id: 5,
    type: "Grape",
    image: images.grape,
    isFound: false,
  },
  {
    id: 6,
    type: "GreenApple",
    image: images.greenApple,
    isFound: false,
  },
  {
    id: 7,
    type: "GreenLemon",
    image: images.greenLemon,
    isFound: false,
  },
  {
    id: 8,
    type: "Lemon",
    image: images.lemon,
    isFound: false,
  },
  {
    id: 9,
    type: "Mulberry",
    image: images.mulberry,
    isFound: false,
  },
  {
    id: 10,
    type: "Raspberry",
    image: images.raspberry,
    isFound: false,
  },
  {
    id: 11,
    type: "RedApple",
    image: images.redApple,
    isFound: false,
  },
  {
    id: 12,
    type: "RedOrange",
    image: images.redOrange,
    isFound: false,
  },
  {
    id: 13,
    type: "Strawberry",
    image: images.strawberry,
    isFound: false,
  },
  {
    id: 14,
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
    id: 1,
    label: "Rank",
    isSorted: false,
  },
  {
    id: 2,
    label: "Player",
    isSorted: true,
    sort: "user",
  },
  {
    id: 3,
    label: "Time",
    isSorted: true,
    sort: "time",
  },
  {
    id: 4,
    label: "Score",
    isSorted: true,
    sort: "score",
  },
];

export default gameGrid;
