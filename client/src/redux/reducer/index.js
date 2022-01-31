import { combineReducers } from "redux";
import gameReducer from "./gameReducer";

const rootReducer = combineReducers({
  Game: gameReducer,
});

export default rootReducer;
