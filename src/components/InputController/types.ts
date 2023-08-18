import { Control, FieldValues, FormState } from 'react-hook-form';
import { FormData } from '@/types';

export interface Props {
  formData: FormData;
  value: any;
  onBlue: (value: any) => void;
  control: Control<FieldValues, any>;
  formState: FormState<FieldValues>;
  disabled: boolean;
}
