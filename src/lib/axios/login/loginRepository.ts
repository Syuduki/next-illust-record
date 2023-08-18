import Repository from '@/lib/axios/Repository';
import { LoginData } from '@/features/LoginInputForm/types';
import { Req_CreateUserData } from '@/features/CreateUserInputForm/types';

const resource: string = '';
export default {
  csrfToken() {
    return Repository.get(`/sanctum/csrf-cookie`);
  },

  login(req: LoginData) {
    return Repository.post(
      `${resource}/login?login_id=${req.login_id}&password=${req.password}`
    );
  },
  logout() {
    return Repository.post(`${resource}/logout`);
  },
  createUser(req: Req_CreateUserData) {
    return Repository.post(`${resource}/auth/register`, req);
  },
};
