export interface Props {
  id: string;
  size: 'medium' | 'small';
  variant: 'filled' | 'outlined' | 'standard';
  label: string;
  value: string | null;
  onBlur: (value: string | null) => void;
  message?: string;
  required: boolean;
  disabled: boolean;
  width?: number;
}

export interface State {
  password: string;
  showPassword: boolean;
}
