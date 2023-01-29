import { stringify } from 'query-string';
import {
  CrudDetailsRequestModel,
  CrudListRequestModel,
  CrudRequestModel,
} from '../models';
import * as http from './http';
import ApiService from './service';

export class CrudService extends ApiService {
  public async getList(request: CrudListRequestModel) {
    const { page = 1, perPage = 10 } = request.pagination;
    const { field, order } = request.sort;
    const query = {
      _filters: JSON.stringify(request.filter),
      _sort: field,
      _order: order,
      _start: (page - 1) * perPage,
      _end: page * perPage,
      ...request.queryParams,
    };
    const url = `${this.apiDomain}/${request.resource}?${stringify(query)}`;

    const response = await http.get(url, this.store);
    return { data: response.data, count: response.headers['x-total-count'] };
  }

  public async create(request: CrudRequestModel, data: any) {
    const url = `${this.apiDomain}/${request.resource}`;
    return http.post(url, data, this.store);
  }

  public async get(request: CrudDetailsRequestModel) {
    const url = `${this.apiDomain}/${request.resource}/${request.resourceId}`;
    return http.get(url, this.store);
  }

  public async update(request: CrudDetailsRequestModel, data: any) {
    const url = `${this.apiDomain}/${request.resource}/${request.resourceId}`;
    return http.put(url, data, this.store);
  }

  public async remove(request: CrudDetailsRequestModel) {
    const url = `${this.apiDomain}/${request.resource}/${request.resourceId}`;
    return http.remove(url, this.store);
  }
}
