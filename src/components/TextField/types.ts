export interface Props {
  id: string;
  size: 'medium' | 'small';
  variant: 'filled' | 'outlined' | 'standard';
  multiline: boolean;
  label: string;
  value: string | null;
  onBlur: (value: string | null) => void;
  message?: string;
  required: boolean;
  width?: number;
  disabled: boolean;
}
