import { Article } from "./article_interface";

export interface Root {
  status?: string;
  totalResults: number;
  articles: Article[];
}
