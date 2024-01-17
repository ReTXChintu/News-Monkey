import React, { useState, useEffect } from "react";
import { Box, Center, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsCard from "./NewsCard";

const TopNewsPage = () => {
  const [topNews, setTopNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreNews = async () => {
    console.log("Fetch more news called");
    try {
      const pageSize = 15; // Adjust the page size as needed
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&pageSize=${pageSize}&page=${currentPage}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": "8831c698656342c59446d6cd1f0fd74d",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setTimeout(async () => {
        const result = await response.json();

        if (result.articles.length === 0) {
          setHasMore(false);
          return;
        }

        setTopNews((prevNews) => [...prevNews, ...result.articles]);
        setCurrentPage((prevPage) => prevPage + 1);
      }, 1000);
    } catch (error) {
      console.error("Error during fetch:", error);
      // Handle the error appropriately
    }
  };
  useEffect(() => {
    // Initial fetch of top news
    fetchMoreNews();
  }, []);

  return (
    <Center>
      <Box width={{ base: "100%", md: "80%", lg: "80%", xl: "80%" }}>
        <InfiniteScroll
          dataLength={topNews.length}
          next={fetchMoreNews}
          hasMore={hasMore}
          loader={<Text textAlign={"center"}><Spinner /></Text>}
        >
          <Heading fontSize={"lg"} fontWeight={"bold"}>
            Top Stories
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
            {topNews.map((newsItem, index) => (
              <NewsCard key={index} newsItem={newsItem} />
            ))}
          </SimpleGrid>
        </InfiniteScroll>
      </Box>
    </Center>
  );
};

export default TopNewsPage;
