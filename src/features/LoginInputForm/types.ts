export interface Props {
  onAccept: () => void;
  onClickCreate: () => void;
  _StorybookLoginFn?: () => void;
  _StorybookData?: LoginData;
}

export interface LoginData {
  [key: string]: string | null;
  login_id: string | null;
  password: string | null;
}
