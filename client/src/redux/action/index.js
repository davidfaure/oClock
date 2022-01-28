import * as types from "../constants";

export const gameStart = () => {
  return {
    type: types.GAME_START,
  };
};

export const gameOver = () => {
  return {
    type: types.GAME_OVER,
  };
};
