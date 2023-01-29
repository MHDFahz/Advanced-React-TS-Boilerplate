// tslint:disable: interface-name
import { Action } from 'redux';

export interface IAction<T = string> extends Action<T> {}
export interface IActionWithPayload<T = string, U = any> extends IAction<T> {
  readonly payload: U;
}

export const createActionWithPayload = <T = string, U = any>(
  type: T,
  payload: U
): IActionWithPayload<T, U> => {
  const actionData: IActionWithPayload<T, U> = {
    type,
    payload,
  };

  return actionData;
};

export const createAction = <T = string>(type: T): IAction<T> => {
  const actionData: IAction<T> = {
    type,
  };
  return actionData;
};
