export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  url: string;
  topics: string[];
  level: string;
}