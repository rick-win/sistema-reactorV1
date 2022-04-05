export interface User {
  email: string;
  password: string;
}

export interface UserResponse extends User {
  message: string;
  token: string;
  userID: number;
  role: string;
  username: string;
  name: string;
  last: string;
  phone: string;
}
