import { useEffect, useState } from "react";
import { Article } from "../interfaces/article_interface";
import { Root } from "../interfaces/root_interface";

const useGetArticles = () => {
  const apiKey: string = import.meta.env.VITE_NEWS_API_KEY;
  const [data, setData] = useState<Article[] | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [category, setCategory] = useState<string>("general")

  useEffect(() => {
    const fetchData = async () => {
      const newsApiUrl: string = `https://newsapi.org/v2/top-headlines?country=us&pageSize=${pageSize}&page=${currentPage}&category=${category}&apiKey=${apiKey}`;
      try {
        const response: Response = await fetch(newsApiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const parsed: Root = await response.json();
        setData(parsed.articles);
        setTotalPages(Math.ceil(parsed.totalResults / pageSize));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [apiKey, currentPage, pageSize, category]);

  const goToPage = (page: number, pageSize: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setPageSize(pageSize)
    }
  }

  const changePageSize = (current: number, size: number) => {
    setPageSize(size);
    setCurrentPage(current);
  }

  const changeCategory = (value: string) => {
    setCategory(value);
  }

  return { data, currentPage, pageSize, totalPages, goToPage, changePageSize, changeCategory };
};

export default useGetArticles;
