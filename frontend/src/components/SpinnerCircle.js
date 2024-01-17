import { Center, Spinner } from '@chakra-ui/react';
import React from 'react'

export default function SpinnerCircle() {
  return (
    <Center
      height={"100vh"}
      width={"100vw"}
      position={"absolute"}
      backgroundColor="rgba(255, 255, 255, 0.8)"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Center>
  );
}
