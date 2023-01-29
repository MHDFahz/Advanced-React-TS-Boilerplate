/**
 * A module that configures the redux store for the Testing app.
 *
 * @module configureStore
 * @param {Object} applyMiddleware - The redux `applyMiddleware` function.
 * @param {Object} compose - The redux `compose` function.
 * @param {Object} createStore - The redux `createStore` function.
 * @param {Object} rootReducer - The root reducer for the app.
 * @param {Object} thunk - The `thunk` middleware.
 * @param {Object} loadingBarMiddleware - The `loadingBarMiddleware` function from `react-redux-loading-bar`.
 */
// import { createLogger } from 'redux-logger';
import { loadingBarMiddleware } from "react-redux-loading-bar";
import { applyMiddleware, compose, createStore } from "redux";
// redux-thunk  -handle asynchronous actions in Redux.
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

/**
 * @function
 * @desc Configures the redux store for the app.
 * @note Compose-Used to pass multiple store enhancers to the store
 * preloadedState (optional): represents initial redux state (rendered on
 * server)
 *
 * @param {Object} [preloadedState] - The initial state for the store.
 * @returns {Object} The store.
 */
const configureStore = (preloadedState?: any) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      // applyMiddleware(thunk, loadingBarMiddleware(), createLogger()),
      applyMiddleware(thunk, loadingBarMiddleware())
    )
  );
  return store;
};

export default configureStore;
