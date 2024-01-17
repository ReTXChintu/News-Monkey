import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../Preview.jpg";

export default function NewsCard({newsItem}) {
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
          <Text
            color="blue.600"
            fontSize="2xs"
            position={"absolute"}
            bottom={0}
          >
            by {newsItem.author ? newsItem.author : "anonymous"} on{" "}
            {newsItem.publishedAt}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
