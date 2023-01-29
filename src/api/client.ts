import { CrudService, UserService, AuthService } from './services';
import ApiServiceDataStore from './services/data';

export default class EdsApiClient {
  public crud: CrudService;
  public user: UserService;
  public auth: AuthService;
  private store: ApiServiceDataStore = {
    apiDomain: '',
    token: undefined,
  };

  constructor(apiDomain: string) {
    this.store.apiDomain = apiDomain;
    this.crud = new CrudService(this.store);
    this.user = new UserService(this.store);
    this.auth = new AuthService(this.store);
  }

  public setToken(token?: string) {
    this.store.token = token;
  }
}
