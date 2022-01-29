/* eslint-disable consistent-return */
export const getTitle = (type) => {
  switch (type) {
    case "intro":
      return "Memory Game";
    case "loose":
      return "You Loose";
    case "win":
      return "You Win";
    default:
  }
};

export const getButtonTitle = (type) => {
  switch (type) {
    case "intro":
      return "Start";
    case "loose":
    case "win":
      return "Restart";
    default:
  }
};
