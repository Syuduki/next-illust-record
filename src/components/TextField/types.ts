export interface Props {
  id: string;
  size: 'medium' | 'small';
  variant: 'filled' | 'outlined' | 'standard';
  multiline: boolean;
  label: string;
  value: string;
  onChangeValue: (value: string) => void;
  message?: string;
  required: boolean;
}
