import React, { useState, useEffect } from "react";
import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsCard from "./NewsCard";

const MoreNewsPage = ({ toggleLoading, title, url }) => {
  const [moreNews, setMoreNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const apikey=process.env.REACT_APP_NEWS_API_KEY;

  const fetchMoreNews = async () => {
    try {
      toggleLoading(true);
      const pageSize = 15; // Adjust the page size as needed
      const response = await fetch(
        `https://newsapi.org/v2/${url}&pageSize=${pageSize}&page=${currentPage}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": apikey,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (result.articles.length === 0) {
        setHasMore(false);
        return;
      }

      setMoreNews((prevNews) => [...prevNews, ...result.articles]);
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error during fetch:", error);
      // Handle the error appropriately
    } finally{
      toggleLoading(false);
    }
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        toggleLoading(true);
        const pageSize = 15; // Adjust the page size as needed
        const response = await fetch(
          `https://newsapi.org/v2/${url}&pageSize=${pageSize}&page=1`,
          {
            method: "GET",
            headers: {
              "X-Api-Key": apikey,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        if (result.articles.length === 0) {
          setHasMore(false);
          return;
        }

        setMoreNews((prevNews) => result.articles);
      } catch (error) {
        console.error("Error during fetch:", error);
        // Handle the error appropriately
      } finally {
        toggleLoading(false);
      }
    };

    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, apikey]);

  return (
    <Center>
      <Box width={{ base: "100%", md: "80%", lg: "80%", xl: "80%" }}>
        <InfiniteScroll
          dataLength={moreNews.length}
          next={fetchMoreNews}
          hasMore={hasMore}
          loader={<Spinner />}
        >
          <Heading fontSize={"lg"} fontWeight={"bold"}>
            {title}
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
            {moreNews.map((newsItem, index) => (
              <NewsCard key={index} newsItem={newsItem} />
            ))}
          </SimpleGrid>
        </InfiniteScroll>
      </Box>
    </Center>
  );
};

export default MoreNewsPage;
