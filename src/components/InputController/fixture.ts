import { FormData } from '@/types';

export const FIX_FORM_DATA: FormData = {
  id: 'fixture',
  label: 'Storybook',
  inputType: 'text',
  required: true,
  variant: 'outlined',
  size: 'small',
  rules: {
    required: {
      value: true,
      message: 'エラー！エラー！エラー！',
    },
  },
};
