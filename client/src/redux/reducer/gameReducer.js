/* eslint-disable default-param-last */
import * as types from "../constants";

const intialState = {
  gameStarted: false,
  gameOver: false,
};

const gameReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.GAME_START:
      return {
        ...state,
        gameStarted: true,
      };
    case types.GAME_OVER:
      return {
        ...state,
        gameOver: true,
      };
    default:
      return state;
  }
};

export default gameReducer;
