import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { State } from '../store/interfaces';
import {
  loggedInAction,
  logoutAction,
  redirectApplyAction,
  redirectSaveAction,
  profileUpdatedAction,
} from '../store/reducers/authUser';
import { StatusCodes } from 'http-status-codes';
import api from '../api';
import { User } from '../api/models';

export const useAuth = () => {
  const authState = useSelector((state: State) => state.authUser);
  const dispatch = useDispatch();
  const [loginError, setLoginError] = useState<string | undefined>();
  const [updating, setUpdating] = useState<boolean>(false);
  const history = useHistory();

  const login = async (
    data: {
      email: string;
      password: string;
    },
    setToken: (token?: string) => void,
    redirectTo: string,
    onSuccess?: () => void
  ) => {
    setLoginError(undefined);
    setUpdating(true);
    try {
      const response = await api.auth.login({
        username: data.email,
        password: data.password,
      });

      if (response.status === StatusCodes.OK) {
        dispatch(loggedInAction(response.data));
        setToken(response.data?.token);
        history.push(authState.redirectTo || redirectTo);
        redirectApply();
        if (onSuccess) onSuccess();
      } else {
        setLoginError('Invalid Username or Password!');
      }
    } catch (error) {
      setLoginError('Invalid Username or Password!');
    }
    setUpdating(false);
  };

  const logout = (logoutLink: string) => {
    dispatch(logoutAction());
    history.push(logoutLink);
  };

  const redirectSave = (to: string) => {
    dispatch(redirectSaveAction(to));
  };

  const setProfile = async (data: User, onSuccess?: () => void) => {
    dispatch(profileUpdatedAction(data));
  };

  const redirectApply = () => dispatch(redirectApplyAction());
  return {
    isAuthenticated: !!authState.token,
    profile: authState.profile,
    loginError,
    updating,
    login,
    logout,
    redirectSave,
    redirectApply,
    setProfile,
  };
};
