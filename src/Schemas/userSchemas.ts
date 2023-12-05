export interface UserInput {
  input: User;
}

export interface UserLogin {
  input: Login;
}

export interface getUser {
  id: string;
}
interface Login {
  username: string;
  password: string;
}

interface User {
  username: string;
  email: string;
  password: string;
}
