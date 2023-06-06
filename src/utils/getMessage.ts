interface Params {
  type: 'require' | 'require2' | 'minLength' | 'misMatch';
  label: string;
  length?: number;
}

export const getMessage = ({ type, label, length }: Params): string => {
  let message: string | undefined;
  const messagesMap = new Map([
    ['require', `${label}は必須です。`],
    ['require2', `${label}を入力してください。`],
    ['minLength', `${label}は${length}文字以上で入力してください。`],
    ['misMatch', `${label}が一致しませんでした。`],
  ]);
  message = messagesMap.get(type);
  return message
    ? message
    : '【Err: useGetMessages】指定されたタイプのメッセージはありません。';
};
