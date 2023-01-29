import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

import { Router } from 'react-router-dom';

import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

// import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactReduxToastr from 'react-redux-toastr';

// extending expect
import 'jest-axe/extend-expect';
import '@testing-library/jest-dom/extend-expect';

import configureStoreTestDev from '../store/configureStore.test.dev';

function customRender(
  ui: any,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: ['/'] }),
    // history = { initialEntries: [route] },
    // initialState,
    // store = createStore(rootReducer, initialState),
    store = configureStoreTestDev(),
    ...renderOptions
  } = {}
) {
  const providers = ({ children }: { children?: ReactNode }) => {
    return (
      <Provider store={store}>
        {/* <MemoryRouter initialEntries={history.initialEntries}>
          {children}
        </MemoryRouter> */}
        <Router history={history}>
          <ReactReduxToastr
            timeOut={1000}
            newestOnTop={false}
            preventDuplicates
            position="top-right"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar={false}
          />
          {children}
        </Router>
      </Provider>
    );
  };
  providers.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return {
    ...render(ui, { wrapper: providers, ...renderOptions }),
    history,
  };
}

// re-export everything
export * from '@testing-library/react';

export {
  // override render method
  customRender as render,
  axe,
};
