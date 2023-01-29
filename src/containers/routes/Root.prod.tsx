import PropTypes from "prop-types";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { PersistGate } from "redux-persist/integration/react";

import App from "../App";
// import registerServiceWorker from './registerServiceWorker';

/**
 * The root component of the application.
 *
 * @param {Object} store - The redux store.
 * @param {Object} persistor - The persisted redux store.
 */
const Root = ({ store, persistor }: any) => (
  /**
   * Provider for the redux store.
   *
   * @param {Object} store - The redux store.
   */
  <Provider store={store}>
    <Router>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>
);

// disable service worker until initial production deployment
// know the caching caveats before enabling it early on:
// https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#opting-out-of-caching
// registerServiceWorker();

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
  persistor: PropTypes.shape({}).isRequired,
};

export default Root;
