import { ApiResponse, TokenData } from '../models';
import * as http from './http';
import ApiService from './service';

export class AuthService extends ApiService {
  static loginUrl = '/api/auth/login';
  public async login(credentials: { username: string; password: string }) {
    const url = `${this.apiDomain}${AuthService.loginUrl}`;
    const data = {
      username: credentials.username,
      password: credentials.password,
    };
    const response = await http.post<ApiResponse<TokenData>>(url, data);
    return response.data;
  }
}
