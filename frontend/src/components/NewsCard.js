import { Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function NewsCard({newsItem}) {
  return (
    <Card maxW="sm" m={4} onClick={() => { window.open(newsItem.url, "_blank");}}>
      <CardBody>
        <Image
          src={newsItem.urlToImage}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="sm">{newsItem.title}</Heading>
          <Text color="blue.600" fontSize="2xs" position={"absolute"} bottom={55}>
            {newsItem.author}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Text fontSize={"2xs"}>Source: {newsItem.source.name}</Text>
      </CardFooter>
    </Card>
  );
}
