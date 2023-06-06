export interface Props {
  onAccept: () => void;
  _StorybookCreateFn?: () => void;
  _StorybookData?: CreateUserData;
}

export interface Req_CreateUserData {
  userName: string | null;
  loginId: string | null;
  password: string | null;
}

export interface CreateUserData extends Req_CreateUserData {
  [key: string]: string | null;
  afterPassword: string | null;
}
