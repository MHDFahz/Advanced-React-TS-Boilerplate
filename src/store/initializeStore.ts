import api from "../api";
import { unauthorizedApiResponseInterceptor } from "../api/interceptor";
import { AuthService } from "../api/services/auth";
import { logoutAction } from "./reducers/authUser";
import { clearDataAction } from "./reducers/common";

/**
 * Initializes the application's integration with an HTTP API.
 *
 * @param {Object} store - The Redux store instance.
 */
const initialize = (store: any) => {
  const state = store.getState();
  unauthorizedApiResponseInterceptor(() => {
    store.dispatch(logoutAction());
    store.dispatch(clearDataAction());
    api.setToken(undefined);
    window.location.reload();
  }, [AuthService.loginUrl]);

  api.setToken(state.authUser.token);
  if (state.authUser.token) {
    api.setToken(state.authUser.token);
    // store.dispatch(userActions.fetchProfile());
  }
};

export default initialize;
