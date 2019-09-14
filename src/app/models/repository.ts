export interface IRepository {
  owner: IUser;
  html_url: string;
  name: string;
  stargazers_count: string;
  description: string;
  language: string;
  [propName: string]: any;
}

interface IUser {
  avatar_url: string;
  [propName: string]: any;
}
