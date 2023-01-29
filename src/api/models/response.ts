export interface ApiResponse<T = void> {
  message?: string;
  status: number;
  data: T;
}

export interface ApiErrorResponse extends ApiResponse {
  message?: string;
  status: number;
  errors?: any;
  timestamp?: string;
  path?: string;
}

export interface Paginated {
  count: number;
  page: number;
  perPage: number;
  totalPages: number;
}

export interface PaginatedApiResponse<T = void>
  extends ApiResponse<T[]>,
    Paginated {}
