import { Card, CardBody, Heading, Image, Stack } from "@chakra-ui/react";
import React from "react";

export default function NewsList({ newsItem }) {
  return (
    <Card direction={"row"} overflow="hidden" variant="outline" w={"100%"} h={"100px"} onClick={() => {window.open(newsItem.url, "_blank");}}>
      <Image
        objectFit="cover"
        maxW={"100px"}
        maxH={"100%"}
        src={newsItem.urlToImage}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="sm">{newsItem.title}</Heading>
        </CardBody>
      </Stack>
    </Card>
  );
}
