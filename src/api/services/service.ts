import ApiServiceDataStore from './data';

export default class ApiService {
  public store: ApiServiceDataStore;

  constructor(store: ApiServiceDataStore) {
    this.store = store;
  }

  get token() {
    return this.store.token;
  }

  get apiDomain() {
    return this.store.apiDomain;
  }
}
