export interface Props {
  onAccept: () => void;
  onClickLogin: () => void;
  _StorybookCreateFn?: () => void;
  _StorybookData?: CreateUserData;
}

export interface Req_CreateUserData {
  name: string | null;
  loginId: string | null;
  email: string | null;
  password: string | null;
}

export interface CreateUserData extends Req_CreateUserData {
  [key: string]: string | null;
  afterPassword: string | null;
}
