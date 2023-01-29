import api from '../../api';
import { User } from '../../api/models';
import { Dict } from '../../models';
import {
  createAction,
  createActionWithPayload,
  IAction,
  IActionWithPayload,
} from '../utils';
import { COMMON_RESET_DATA_ACTION, ResetActionType } from './common';

// action types
// login
const AUTH_LOGGED_IN_ACTION = 'AUTH/LOGGED_IN';
// profile
const AUTH_PROFILE_UPDATED_ACTION = 'AUTH/PROFILE_UPDATED_ACTION';
// logout
const AUTH_LOGOUT_ACTION = 'AUTH/LOGOUT';
// redirect
const AUTH_REDIRECT_SAVE_ACTION = 'AUTH/REDIRECT_SAVE';
const AUTH_REDIRECT_APPLY_ACTION = 'AUTH/REDIRECT_APPLY';

export interface AuthState {
  token?: string;
  redirectTo?: string;
  apiPermissions?: Dict;
  profile?: User;
}

type LoggedInActionType = IActionWithPayload<
  typeof AUTH_LOGGED_IN_ACTION,
  { token: string; user: User; apiPermissions: Dict }
>;

type RedirectSaveActionType = IActionWithPayload<
  typeof AUTH_REDIRECT_SAVE_ACTION,
  string
>;

type ProfileUpdatedActionType = IActionWithPayload<
  typeof AUTH_PROFILE_UPDATED_ACTION,
  User
>;

type LogoutActionType = IAction<typeof AUTH_LOGOUT_ACTION>;
type RedirectApplyActionType = IAction<typeof AUTH_REDIRECT_APPLY_ACTION>;

type Actions =
  | LoggedInActionType
  | RedirectSaveActionType
  | LogoutActionType
  | RedirectApplyActionType
  | ResetActionType
  | ProfileUpdatedActionType;

// initial state
const initialState: AuthState = {
  redirectTo: '/',
};

export const logoutAction = (): LogoutActionType => {
  return createAction(AUTH_LOGOUT_ACTION);
};

export const redirectApplyAction = (): RedirectApplyActionType => {
  return createAction(AUTH_REDIRECT_APPLY_ACTION);
};

export const redirectSaveAction = (to: string): RedirectSaveActionType => {
  return createActionWithPayload(AUTH_REDIRECT_SAVE_ACTION, to);
};

export const profileUpdatedAction = (
  profile: User
): ProfileUpdatedActionType => {
  return createActionWithPayload(AUTH_PROFILE_UPDATED_ACTION, profile);
};

export const loggedInAction = (data: {
  token: string;
  user: User;
  apiPermissions: Dict;
}): LoggedInActionType => {
  return createActionWithPayload(AUTH_LOGGED_IN_ACTION, data);
};

// reducer
export const authUserReducer = (
  state: AuthState = initialState,
  action: Actions
): AuthState => {
  switch (action.type) {
    // login
    case AUTH_LOGGED_IN_ACTION:
      return {
        ...state,
        token: action.payload.token,
        profile: action.payload.user,
        apiPermissions: action.payload.apiPermissions,
      };

    // logout
    case AUTH_LOGOUT_ACTION:
      api.setToken(undefined);
      return {
        ...state,
        token: undefined,
        profile: undefined,
      };
    // profile
    case AUTH_PROFILE_UPDATED_ACTION:
      return {
        ...state,
        profile: action.payload,
      };

    case COMMON_RESET_DATA_ACTION:
      return {
        ...initialState,
      };

    // redirect
    case AUTH_REDIRECT_SAVE_ACTION:
      return { ...state, redirectTo: action.payload };
    case AUTH_REDIRECT_APPLY_ACTION:
      return { ...state, redirectTo: undefined };
    default:
      return state;
  }
};
