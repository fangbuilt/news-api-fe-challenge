import { Flex, Pagination, Select } from "antd";
import useGetArticles from "./stores/article_state";
import NewsCards from "./components/news_cards";

const App = () => {
  const {
    data,
    currentPage,
    pageSize,
    totalPages,
    goToPage,
    changePageSize,
    changeCategory,
  } = useGetArticles();

  return (
    <Flex vertical justify="center" gap={25} style={{ padding: 50 }}>
      <Flex justify="space-between" align="center">
        <h2>Daily News Headlines</h2>
        <Pagination
          responsive
          current={currentPage}
          defaultCurrent={1}
          total={totalPages * pageSize}
          pageSize={pageSize}
          defaultPageSize={10}
          onChange={goToPage}
          onShowSizeChange={changePageSize}
        />
      </Flex>
      <Flex gap={10} align="center">
        <label>Category: </label>
        <Select
          style={{ width: "full" }}
          defaultValue={"general"}
          onChange={changeCategory}
          options={[
            {
              value: "general",
              label: "General",
            },
            {
              value: "business",
              label: "Business",
            },
            {
              value: "entertainment",
              label: "Entertainment",
            },
            {
              value: "health",
              label: "Health",
            },
            {
              value: "science",
              label: "Science",
            },
            {
              value: "sports",
              label: "Sports",
            },
            {
              value: "technology",
              label: "Technology",
            },
          ]}
        />
      </Flex>
      <NewsCards articles={data || []} totalResults={totalPages} />
    </Flex>
  );
};

export default App;
