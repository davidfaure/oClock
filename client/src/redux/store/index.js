import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducer";

// import reducer and devTools to debug during development time
const store = createStore(rootReducer, composeWithDevTools());

export default store;
