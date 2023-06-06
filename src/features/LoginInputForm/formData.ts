import { FormData } from '@/types';
import { getMessage } from '@/utils';

export const FORM_DATA_LIST: FormData[] = [
  {
    id: 'loginId',
    label: 'ログインID',
    required: true,
    inputType: 'text',
    variant: 'outlined',
    size: 'small',
    rules: {
      required: {
        value: true,
        message: getMessage({ type: 'require2', label: 'ログインID' }),
      },
    },
  },
  {
    id: 'password',
    label: 'パスワード',
    required: true,
    inputType: 'text',
    variant: 'outlined',
    size: 'small',
    rules: {
      required: {
        value: true,
        message: getMessage({ type: 'require2', label: 'パスワード' }),
      },
      minLength: {
        value: 7,
        message: getMessage({
          type: 'minLength',
          label: 'パスワード',
          length: 7,
        }),
      },
    },
  },
];
