import PropTypes from "prop-types";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { PersistGate } from "redux-persist/integration/react";

import App from "../App";
// import DevTools from "./DevTools";

/**
 * The root component of the application.
 *
 * @param {Object} store - The redux store.
 * @param {Object} persistor - The persisted redux store.
 */
const Root = ({ store, persistor }: any) => {
  // console.log('persistor(root.dev): ', persistor);
  // console.log('store(root.dev): ', store);
  return (
    <Provider store={store}>
      <Router>
        <PersistGate loading={null} persistor={persistor}>
          <App /> {/* <DevTools/> */}
        </PersistGate>
      </Router>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
  persistor: PropTypes.shape({}).isRequired,
};

export default Root;
