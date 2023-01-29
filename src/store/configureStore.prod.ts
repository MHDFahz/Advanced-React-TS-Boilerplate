/**
 * A module that configures the redux store for the Production app.
 *
 * @module configureStore
 * @param {Object} applyMiddleware - The redux `applyMiddleware` function.
 * @param {Object} compose - The redux `compose` function.
 * @param {Object} createStore - The redux `createStore` function.
 * @param {Object} persistReducer - The `persistReducer` function from `redux-persist`.
 * @param {Object} persistStore - The `persistStore` function from `redux-persist`.
 * @param {Object} storage - The `storage` object from `redux-persist`.
 * @param {Object} thunk - The `thunk` middleware.
 * @param {Object} rootReducer - The root reducer for the app.
 * @param {Object} initialize - A function that initializes the store.
 * @param {Object} loadingBarMiddleware - The `loadingBarMiddleware` function from `react-redux-loading-bar`.
 */
import { loadingBarMiddleware } from "react-redux-loading-bar";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import initialize from "./initializeStore";
import { State } from "./interfaces";
import rootReducer from "./rootReducer";

const persistConfig: PersistConfig<State> = {
  key: "root",
  storage,
  whitelist: ["authUser"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * @function configureStore
 * @desc Configures the redux store for the app.
 * @note preloadedState (optional): represents initial redux state (rendered on server)
 *
 * @returns {Object} An object containing the store and persistor.
 */
const configureStore = () => {
  const store = createStore(
    persistedReducer,
    compose(applyMiddleware(thunk, loadingBarMiddleware()))
  );

  const persistor = persistStore(store, null, () => {
    initialize(store);
  });
  return { store, persistor };
};

export default configureStore;
