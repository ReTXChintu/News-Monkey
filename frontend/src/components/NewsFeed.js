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

export default function NewsFeed() {
  const [topHeadlines, setTopHeadlines] = useState([]);
  const [randomTopHeadlines, setRandomTopHeadlines] = useState([]);
  const [forYou, setForYou] = useState([]);
  const [randomForYou, setRandomForYou] = useState([]);

  const gridWidth = useBreakpointValue({ base: "100%", lg: "50%" });

  useEffect(() => {
    async function fetchTopHeadlines() {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=in",
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
        console.log(result.articles[0]);
        setTopHeadlines(result.articles);
        // Do something with the result (e.g., update state with the fetched data)
      } catch (error) {
        console.error("Error during fetch:", error);
        // Handle the error appropriately
      }
    }
    // console.log(result);
    fetchTopHeadlines();
  }, []);

  useEffect(() => {
    async function fetchForYou() {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com",
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
        console.log(result.articles[0]);
        setForYou(result.articles);
        // Do something with the result (e.g., update state with the fetched data)
      } catch (error) {
        console.error("Error during fetch:", error);
        // Handle the error appropriately
      }
    }
    fetchForYou();
  }, []);

  useEffect(() => {
    const getRandomItems = (array, count) => {
      const shuffledArray = array.sort(() => Math.random() - 0.5);
      return shuffledArray.slice(0, count);
    };

    const randomTopHeadlinesArray = getRandomItems(topHeadlines, 4);
    setRandomTopHeadlines(randomTopHeadlinesArray);
  }, [topHeadlines]);

  useEffect(() => {
    const getRandomItems = (array, count) => {
      const shuffledArray = array.sort(() => Math.random() - 0.5);
      return shuffledArray.slice(0, count);
    };

    const randomForYouArray = getRandomItems(forYou, 16);
    setRandomForYou(randomForYouArray);
  }, [forYou]);

  return (
    <Center mt={10}>
      <DynamicStack
        hStackProps={{ width: "90%", alignItems: "flex-start" }}
        vStackProps={{ width: "90%" }}
      >
        <Box width={gridWidth}>
          <HStack justifyContent={"space-between"}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              Top News
            </Text>
            <Button backgroundColor={"white"}>See all{">>"}</Button>
          </HStack>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }}>
            {randomTopHeadlines
              ? randomTopHeadlines.map((newsItem) => (
                  <NewsCard key={newsItem.url} newsItem={newsItem} />
                ))
              : null}
          </SimpleGrid>
        </Box>

        <Box
          width={gridWidth}
          maxH={"70vh"}
          overflowY={"auto"}
          position={"relative"}
        >
          <HStack justifyContent={"space-between"} top={0} mb={5}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              For You
            </Text>
            <Button backgroundColor={"white"}>See all{">>"}</Button>
          </HStack>
          <VStack>
            {randomForYou.map((newsItem) => (
              <NewsList key={newsItem.url} newsItem={newsItem} />
            ))}
          </VStack>
        </Box>
      </DynamicStack>
    </Center>
  );
}
