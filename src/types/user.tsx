export interface UserCreate extends UserLogin {
  email: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface UserUpdate {
  username?: string;
  email?: string;
  password?: string;
}

export interface UserLoginResponse {
  access_token: string;
  token_type: 'bearer';
}
export interface UserResponse {
  username: string;
  email: string;
  id: number;
}
