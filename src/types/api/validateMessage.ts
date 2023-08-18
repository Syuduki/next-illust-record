// ユーザー登録　バリデーションエラーのメッセージリスト
export interface CreateUserMessageList {
  [key: string]: string[];
  name: string[];
  login_id: string[];
  password: string[];
  email: string[];
}

export interface LoginMessageList {
  [key: string]: string[];
  login_id: string[];
  password: string[];
}
