/* eslint-disable default-param-last */
import gameGrid from "../../utils/appData";
import * as types from "../constants";

const intialState = {
  gameIntro: true,
  gameStarted: false,
  gameOver: false,
  gameRestart: false,
  gameWinner: false,
  player: "",
  time: null,
  score: 0,
  fruitsFound: gameGrid,
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
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return {
        ...state,
        time: `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`,
      };
    }
    case types.RESET_FRUITS_FOUND:
      return {
        ...state,
        fruitsFound: gameGrid,
      };
    case types.FRUITS_FOUND: {
      const { fruit } = action;
      return {
        ...state,
        fruitsFound: state.fruitsFound.map((e) => {
          if (e.type === fruit) {
            return {
              ...e,
              isFound: true,
            };
          }
          return e;
        }),
      };
    }
    default:
      return state;
  }
};

export default gameReducer;
