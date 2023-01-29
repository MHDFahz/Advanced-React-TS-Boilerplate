import { Dict } from '../../models';

export interface CrudRequestModel {
  resource: string;
}

export interface CrudListRequestModel extends CrudRequestModel {
  pagination: { page?: number; perPage?: number };
  sort: { field?: string; order?: string };
  filter?: {};
  queryParams?: Dict;
}

export interface CrudDetailsRequestModel extends CrudRequestModel {
  resourceId: string;
}
