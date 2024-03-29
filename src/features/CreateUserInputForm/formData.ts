import { FormData } from '@/types';
import { getMessage } from '@/utils';

export const FORM_DATA_LIST: FormData[] = [
  {
    id: 'name',
    label: 'ユーザー名',
    inputType: 'text',
    required: true,
    variant: 'outlined',
    size: 'small',
    rules: {
      required: {
        value: true,
        message: getMessage({ type: 'require', label: 'ユーザー名' }),
      },
    },
  },
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
        message: getMessage({ type: 'require', label: 'ログインID' }),
      },
    },
  },
  {
    id: 'email',
    label: 'メールアドレス',
    required: true,
    inputType: 'text',
    variant: 'outlined',
    size: 'small',
    rules: {
      required: {
        value: true,
        message: getMessage({ type: 'require', label: 'メールアドレス' }),
      },
    },
  },
  {
    id: 'password',
    label: 'パスワード',
    required: true,
    inputType: 'password',
    variant: 'outlined',
    size: 'small',
    rules: {
      required: {
        value: true,
        message: getMessage({ type: 'require', label: 'パスワード' }),
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
  {
    id: 'afterPassword',
    label: 'パスワード(再入力)',
    required: true,
    inputType: 'password',
    variant: 'outlined',
    size: 'small',
    rules: {
      required: {
        value: true,
        message: getMessage({ type: 'require', label: 'パスワード(再入力)' }),
      },
    },
  },
];
