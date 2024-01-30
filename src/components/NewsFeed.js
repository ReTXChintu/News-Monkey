import {
  Box,
  Button,
  Center,
  HStack,
  SimpleGrid,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import DynamicStack from "./DynamicStack";
import NewsList from "./NewsList";
import { Link } from "react-router-dom";
import SourceList from "./SourceList";

// const newsApiKey=process.env.REACT_APP_NEWS_API_KEY
export default function NewsFeed({ toggleLoading }) {
  const [topHeadlines, setTopHeadlines] = useState([]);
  const [forYou, setForYou] = useState([]);
  const [local, setLocal] = useState([]);

  const sources = [
    {
      name: "Google News",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Google_News_icon.svg/2503px-Google_News_icon.svg.png",
    },
    {
      name: "The Times Of India",
      url: "https://logowik.com/content/uploads/images/634_thetimesofindiacrest.jpg",
    },
    {
      name: "Hindustan Times",
      url: "https://companyurlfinder.com/marketing/assets/img/logos/hindustantimes.com.png",
    },
    {
      name: "India Today",
      url: "https://companyurlfinder.com/marketing/assets/img/logos/indiatoday.in.png",
    },
    {
      name: "NDTV",
      url: "https://cdn.ndtv.com/common/images/ogndtv.png",
    },
  ];

  const gridWidth = useBreakpointValue({ base: "100%", lg: "80%" });

  useEffect(() => {
    const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;
    async function fetchTopHeadlines() {
      toggleLoading(true);
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=in&pageSize=10&page=1",
          {
            method: "GET",
            headers: {
              "X-Api-Key": "04f1b673e0a740ffb9242a259348ba91",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setTopHeadlines(result.articles);

        // Do something with the result (e.g., update state with the fetched data)
      } catch (error) {
        console.error("Error during fetch:", error);
        // Handle the error appropriately
      } finally {
        toggleLoading(false);
      }
    }

    async function fetchForYou() {
      toggleLoading(true);
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&pageSize=4&page=1",
          {
            method: "GET",
            headers: {
              "X-Api-Key": newsApiKey,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setForYou(result.articles);
        // Do something with the result (e.g., update state with the fetched data)
      } catch (error) {
        console.error("Error during fetch:", error);
        // Handle the error appropriately
      } finally {
        toggleLoading(false);
      }
    }

    async function fetchLocalNews() {
      toggleLoading(true);
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=ahmedabad&pageSize=4&page=1",
          {
            method: "GET",
            headers: {
              "X-Api-Key": newsApiKey,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setLocal(result.articles);
        // Do something with the result (e.g., update state with the fetched data)
      } catch (error) {
        console.error("Error during fetch:", error);
        // Handle the error appropriately
      } finally {
        toggleLoading(false);
      }
    }

    fetchTopHeadlines();
    fetchLocalNews();
    fetchForYou();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Center pt={10}>
      <DynamicStack
        hStackProps={{
          width: "90%",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
        vStackProps={{ width: "90%" }}
      >
        <Box width={gridWidth} borderRadius={"10px"} px={3}>
          <HStack justifyContent={"space-between"}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              Top News
            </Text>
            <Link to={"/topnews"}>
              <Button backgroundColor={"white"}>See all{">>"}</Button>
            </Link>
          </HStack>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }}>
            {topHeadlines
              ? topHeadlines.map((newsItem) => (
                  <NewsCard key={newsItem.url} newsItem={newsItem} />
                ))
              : null}
          </SimpleGrid>
        </Box>

        <VStack>
          <Box
            width={gridWidth}
            maxH={"70vh"}
            overflowY={"auto"}
            position={"relative"}
          >
            <HStack justifyContent={"space-between"} top={0} mb={5}>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                Local
              </Text>
              <Link to={"/localnews"}>
                <Button backgroundColor={"white"}>See all{">>"}</Button>
              </Link>
            </HStack>
            <VStack>
              {local.map((newsItem) => (
                <NewsList key={newsItem.url} newsItem={newsItem} />
              ))}
            </VStack>
          </Box>

          <Box
            width={gridWidth}
            maxH={"70vh"}
            overflowY={"auto"}
            position={"relative"}
          >
            <HStack justifyContent={"space-between"} top={0} mb={5}>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                Top Picks for you
              </Text>
              <Link to={"/picksforyou"}>
                <Button backgroundColor={"white"}>See all{">>"}</Button>
              </Link>
            </HStack>
            <VStack>
              {forYou.map((newsItem) => (
                <NewsList key={newsItem.url} newsItem={newsItem} />
              ))}
            </VStack>
          </Box>

          <Box
            width={gridWidth}
            maxH={"70vh"}
            overflowY={"auto"}
            position={"relative"}
          >
            <HStack justifyContent={"space-between"} top={0} mb={5}>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                Sources
              </Text>
              <Button backgroundColor={"white"}>See all{">>"}</Button>
            </HStack>
            <VStack>
              {sources.map((source, index) => (
                <SourceList key={index} source={source} />
              ))}
            </VStack>
          </Box>
        </VStack>
      </DynamicStack>
    </Center>
  );
}
