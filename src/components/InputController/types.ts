import { Control, FieldValues, FormState } from 'react-hook-form';
import { FormData } from '@/types';

export interface Props {
  formData: FormData;
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  control: Control<FieldValues, any>;
  formState: FormState<FieldValues>;
}
