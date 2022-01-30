import * as images from "../assets/images";

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
    type: "Orange",
    image: images.orange,
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

export const starScore = [
  { id: 1, image: images.starFilled },
  { id: 3, image: images.starFilled },
  { id: 3, image: images.starFilled },
];

export const emptyScore = [
  { id: 1, image: images.starEmpty },
  { id: 3, image: images.starEmpty },
  { id: 3, image: images.starEmpty },
];

export default gameGrid;
