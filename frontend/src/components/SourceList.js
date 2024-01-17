import { AddIcon } from "@chakra-ui/icons";
import { Avatar, Button, Card, CardBody, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function SourceList({ source }) {
    console.log(source);
  return (
    <Card
      direction={"row"}
      overflow="hidden"
      variant="outline"
      w={"100%"}
    //   h={"120px"}
      px={4}
      alignItems={"center"}
    //   onClick={() => {
    //     window.open(newsItem.url, "_blank");
    //   }}
      _hover={{ textDecoration: "underline", cursor: "pointer" }}
      >
      <Avatar
        src={source.url}
        alt={source.name}
        name={source.name}
      />

      <Stack w={"100%"}>
        <CardBody>
          <HStack justifyContent={"space-between"}>
            <Text>{source.name}</Text>
            <Button rightIcon={<AddIcon />}>Follow</Button>
          </HStack>
        </CardBody>
      </Stack>
    </Card>
  );
}
