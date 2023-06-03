export const useGetMessages = () => {
  interface Params {
    type: 'require' | 'minLength' | 'mismatch';
    label: string;
    length?: number;
  }

  const getMessage = ({ type, label, length }: Params) => {
    let message: string | undefined = '';

    const iconCustomColorMap = new Map([
      ['require', `${label}は必須です。`],
      ['minLength', `${label}は${length}文字以上で入力してください。`],
      ['mismatch ', `${label}が一致しませんでした`],
    ]);
    message = iconCustomColorMap.get(type);

    return message
      ? message
      : '【Err: useGetMessages】指定されたタイプのメッセージはありません。';
  };
  return getMessage;
};
