/* eslint-disable default-param-last */
import * as types from "../constants";

const intialState = {
  gameIntro: false,
  gameStarted: false,
  gameOver: false,
  gameRestart: false,
  gameWinner: false,
  player: "",
  time: null,
  score: 0,
  Modal: {
    type: "",
    isOpen: false,
  },
};

const gameReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.OPEN_MODAL:
      return {
        ...state,
        Modal: {
          ...state.Modal,
          type: action.modalType,
          isOpen: true,
        },
      };
    case types.CLOSE_MODAL:
      return {
        ...state,
        Modal: {
          ...state.Modal,
          type: "",
          isOpen: false,
        },
      };
    case types.GAME_INTRO:
      return {
        ...state,
        gameIntro: !state.gameIntro,
      };
    case types.GAME_START:
      return {
        ...state,
        gameStarted: !state.gameStarted,
      };
    case types.GAME_RESTART:
      return {
        ...state,
        gameRestart: !state.gameRestart,
      };
    case types.GAME_WIN:
      return {
        ...state,
        gameWinner: !state.gameWinner,
      };
    case types.GAME_OVER:
      return {
        ...state,
        gameOver: !state.gameOver,
      };
    case types.SET_NAME:
      return {
        ...state,
        player: action.name,
      };
    case types.SET_SCORE:
      return {
        ...state,
        score: action.score,
      };
    case types.UPDATE_SCORE:
      return {
        ...state,
        score: state.score + 1,
      };
    case types.CALCULATE_TIME: {
      const { time } = action;
      const finalScore = 180 - time;
      const minutes = Math.floor(finalScore / 60);
      const seconds = finalScore % 60;
      return {
        ...state,
        time: `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`,
      };
    }
    default:
      return state;
  }
};

export default gameReducer;
