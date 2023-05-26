export interface Props {
  id: string;
  size: 'medium' | 'small';
  variant: 'filled' | 'outlined' | 'standard';
  label: string;
  value: string;
  onBlurValue: (value: string) => void;
  message?: string;
  required: boolean;
}

export interface State {
  password: string;
  showPassword: boolean;
}
