import { createAction, IAction } from '../utils';

// common
export const COMMON_RESET_DATA_ACTION = 'COMMON/RESET_DATA';

export type ResetActionType = IAction<typeof COMMON_RESET_DATA_ACTION>;

export const clearDataAction = (): ResetActionType => {
  return createAction(COMMON_RESET_DATA_ACTION);
};
