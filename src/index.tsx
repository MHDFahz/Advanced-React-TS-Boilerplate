/**
 * React Application Root Render File
 *
 * @version 1.2.0
 * @copyright 2021
 * @license MIT
 *
 * This code is the entry point for a React application.
 *
 * 1. It imports the necessary polyfills for Internet Explorer 9, 11 and the latest version.
 * 2. It imports `React` and `ReactDOM` libraries for rendering the application.
 * 3. It imports a CSS file for global styles.
 * 4. It imports a default function `reportWebVitals` for reporting performance metrics of the application.
 * 5. It imports the `store` and `persistor` objects from the `store` file for managing the application state.
 * 6. It uses `ReactDOM.render` to render the `Root` component into the `#root` element in the HTML document.
 * 7. It invokes the `reportWebVitals` function to start measuring the performance of the application.
 */
import React from "react";
import "react-app-polyfill/ie11";
import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import ReactDOM from "react-dom";
import Root from "./containers/routes/Root";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { persistor, store } from "./store";

/**
 * The main entry point.
 *
 *
 * @module IndexFile
 * @param {Object} React - The React library.
 * @param {Object} ReactDOM - The ReactDOM library.
 * @param {Object} Root - The root component for the app.
 * @param {Object} store - The global store for the app.
 * @param {Object} persistor - The persistor for the global store.
 */

/**
 * Renders the root component to the DOM.
 *
 * @function
 * @param {React.Component} component - The root component to render.
 * @param {HTMLElement} element - The DOM element to render the component to.
 */
ReactDOM.render(
  /**
   * Root Compnonet Depend upon NODE_ENV
   *
   * @param {Store<State & PersistPartial, AnyAction>} store Depend upon NODE_ENV
   * @param {Persistor} persistor
   */
  <React.StrictMode>
    <Root store={store} persistor={persistor} />,
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
