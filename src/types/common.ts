export interface FormData {
  id: string;
  label: string;
  required: boolean;
  inputType: 'text' | 'multiline' | 'password';
  variant: 'outlined' | 'filled' | 'standard';
  size: 'small' | 'medium';
  rules: object;
  width?: number;
}
