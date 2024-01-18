import { Card, CardBody, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function NewsList({ newsItem }) {
  return (
    <Card
      direction={"row"}
      overflow="hidden"
      variant="outline"
      w={"100%"}
      h={"120px"}
      onClick={() => {
        window.open(newsItem.url, "_blank");
      }}
      _hover={{ textDecoration: "underline", cursor: "pointer" }}
    >
      <Image
        objectFit="cover"
        maxW={"100px"}
        maxH={"100%"}
        src={newsItem.urlToImage}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Text fontSize="2xs" fontWeight={"bold"} textDecoration={"none"} position={"absolute"} bottom={0}>{newsItem.source.name}</Text>
          <Text>{newsItem.title}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
}
