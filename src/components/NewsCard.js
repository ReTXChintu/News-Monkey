import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import logo from "../Preview.jpg";

export default function NewsCard({ newsItem }) {
  function formatDate(date) {
    let formattedDate = date.slice(0, 10);
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    const day = currentDate.getDate().toString().padStart(2, '0');

    if (formattedDate === `${year}-${month}-${day}`) {
        console.log("true");
        return "today";
    } else {
        return formattedDate;
    }
}
  return (
    <Card maxW="md" m={4}>
      <CardBody _hover={{ textDecoration: "underline", cursor: "pointer" }}>
        <Image
          src={newsItem.urlToImage || logo}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          maxH={"200px"}
        />
        <Text
          backgroundColor={"red.500"}
          display={"inline"}
          px={2}
          borderRadius={"50px"}
          color={"white"}
          fontSize={"sm"}
          position={"absolute"}
          top={0}
          right={0}
        >
          {newsItem.source.name}
        </Text>
        <Stack mt="6" spacing="3">
          <Heading size="sm">{newsItem.title}</Heading>
        </Stack>
      </CardBody>
      <CardFooter>
        <Text color="blue.600" fontSize="2xs" position={"absolute"} bottom={0}>
          by {newsItem.author ? newsItem.author : "anonymous"} on{" "}
          {formatDate(newsItem.publishedAt)}
        </Text>
      </CardFooter>
    </Card>
  );
}
