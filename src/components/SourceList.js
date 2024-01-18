import { AddIcon } from "@chakra-ui/icons";
import { Avatar, Button, Card, CardBody, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function SourceList({ source }) {
  return (
    <Card
      direction={"row"}
      overflow="hidden"
      variant="outline"
      w={"100%"}
      px={4}
      alignItems={"center"}
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
