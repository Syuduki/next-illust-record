export interface Props {
  onClickButton: (data: CreateUserData) => void;
}

export interface CreateUserData {
  [key: string]: string;
  userName: string;
  loginId: string;
  password: string;
  afterPassword: string;
}
