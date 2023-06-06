import { Repository } from '@/lib';
import { LoginData } from '@/features/LoginInputForm/types';
import { Req_CreateUserData } from '@/features/CreateUserInputForm/types';

const resource: string = '';
export default {
  login(req: LoginData) {
    return Repository.post(`${resource}/login`, req);
  },
  logout() {
    return Repository.post(`${resource}/logout`);
  },
  createUser(req: Req_CreateUserData) {
    return Repository.post(`${resource}/create-user`, req);
  },
};
