import * as types from "../constants";

export const gameStart = () => {
  return {
    type: types.GAME_START,
  };
};

export const gameRestart = () => {
  return {
    type: types.GAME_RESTART,
  };
};

export const gameOver = () => {
  return {
    type: types.GAME_OVER,
  };
};

export const gameIntro = () => {
  return {
    type: types.GAME_INTRO,
  };
};

export const gameWin = () => {
  return {
    type: types.GAME_WIN,
  };
};

export const openModal = (modalType) => {
  return {
    type: types.OPEN_MODAL,
    modalType,
  };
};

export const closeModal = () => {
  return {
    type: types.CLOSE_MODAL,
  };
};

export const calculateTime = (time) => {
  return {
    type: types.CALCULATE_TIME,
    time,
  };
};

export const setName = (name) => {
  return {
    type: types.SET_NAME,
    name,
  };
};

export const setScore = (score) => {
  return {
    type: types.SET_SCORE,
    score,
  };
};

export const updateScore = () => {
  return {
    type: types.UPDATE_SCORE,
  };
};

export const foundFruits = (fruit) => {
  return {
    type: types.FRUITS_FOUND,
    fruit,
  };
};

export const resetFoundFruits = () => {
  return {
    type: types.RESET_FRUITS_FOUND,
  };
};
