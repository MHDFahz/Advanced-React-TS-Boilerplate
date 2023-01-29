/// <reference types="webpack-env" />

/**
 * A module that configures the redux store for the Development app.
 *
 * @module configureStore
 * @param {Object} applyMiddleware - The redux `applyMiddleware` function.
 * @param {Object} createStore - The redux `createStore` function.
 * @param {Object} persistReducer - The `persistReducer` function from `redux-persist`.
 * @param {Object} persistStore - The `persistStore` function from `redux-persist`.
 * @param {Object} storage - The `storage` object from `redux-persist`.
 * @param {Object} thunk - The `thunk` middleware.
 * @param {Object} rootReducer - The root reducer for the app.
 * @param {Object} initialize - A function that initializes the store.
 * @param {Object} loadingBarMiddleware - The `loadingBarMiddleware` function from `react-redux-loading-bar`.
 */
// import { createLogger } from 'redux-logger';
import { loadingBarMiddleware } from "react-redux-loading-bar";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import initialize from "./initializeStore";
import rootReducer from "./rootReducer";
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { State } from "./interfaces";

const persistConfig: PersistConfig<State> = {
  key: "root",
  storage,
  whitelist: ["authUser"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  const store = createStore(
    persistedReducer,

    composeWithDevTools(applyMiddleware(thunk, loadingBarMiddleware()))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./rootReducer", () => {
      store.replaceReducer(rootReducer as any);
    });
  }

  const persistor = persistStore(store, null, () => {
    initialize(store);
  });
  return { store, persistor };
};

export default configureStore;
