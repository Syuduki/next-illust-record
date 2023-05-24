import { Repository } from '@/lib';

const resource: string = '';

export interface ILoginReq {
  userid: string;
  password: string;
}

export default {
  login(req: ILoginReq) {
    return Repository.post(`${resource}/login`, req);
  },
  logout() {
    return Repository.post(`${resource}/logout`);
  },
};
