import { AuthState } from './reducers/authUser';

export interface State {
  authUser: AuthState;
  toastr: any;
  loadingBar: any;
}
