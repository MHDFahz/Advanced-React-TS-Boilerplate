import { loadingBarReducer } from "react-redux-loading-bar";
import { reducer as toastrReducer } from "react-redux-toastr";
import { combineReducers } from "redux";

import { State } from "./interfaces";
import { authUserReducer } from "./reducers/authUser";

/**
 * Root reducer for the application.
 *
 * @param {Object} state - The current state of the store.
 * @param {Object} action - The action being dispatched.
 *
 * @returns {Object} The new state of the store.
 */
const rootReducer = combineReducers<State>({
  authUser: authUserReducer,
  toastr: toastrReducer,
  loadingBar: loadingBarReducer,
});

export default rootReducer;
