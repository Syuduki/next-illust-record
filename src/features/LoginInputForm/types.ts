export interface Props {
  onClickButton: (
    state: 'login' | 'create',
    userId: string,
    password: string
  ) => void;
}
