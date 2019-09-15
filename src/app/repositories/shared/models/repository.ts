export interface ISearchResult {
  incomplete_results: boolean;
  items: IRepository[];
  total_count: number;
}

export interface IRepository {
  id: number;
  owner: IUser;
  html_url: string;
  name: string;
  stargazers_count: string;
  description: string;
  language: string;
  isFavorite?: boolean;
  [propName: string]: any;
}

interface IUser {
  avatar_url: string;
  [propName: string]: any;
}
