import { Card, Flex, Image } from "antd";
import { Root } from "../interfaces/root_interface";

const NewsCards = ({ articles }: Root) => {
  const dateFormat = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', { month: "long", day: "numeric", year: "numeric" });
  }
  return (
    <>
      {articles?.map((article, index) => (
        <Card key={index}>
          <Flex align="start" gap={25}>
            <Image
              src={article.urlToImage}
              alt={article.urlToImage}
              style={{ width: 400, height: 225, objectFit: "cover" }}
            />
            <div>
              <a target="_blank" href={article.url}>
                <h3>{article.title}</h3>
              </a>
              <Flex justify="space-between">
                <p>Author: {article.author} | Source: {article.source.name}</p>
                <p>Published: {dateFormat(article.publishedAt)}</p>
              </Flex>
              <p>Summary: {article.description}</p>
            </div>
          </Flex>
        </Card>
      ))}
    </>
  );
};

export default NewsCards;
