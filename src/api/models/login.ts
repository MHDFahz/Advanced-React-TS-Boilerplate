import { Dict } from '../../models';
import { User } from './user';

export interface TokenData {
  token: string;
  userId: string;
  expiryDate: Date;
  apiPermissions: Dict;
  roles: string[];
  user: User;
}
