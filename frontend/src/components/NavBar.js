import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Heading,
  IconButton,
  useDisclosure,
  Collapse,
  HStack,
  VStack,
  Link as ChakraLink,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  const display = useBreakpointValue({
    base: "block",
    sm: "block",
    md: "none",
  });

  return (
    <Box p={4}>
      <Flex alignItems="center">
        <Heading size="md" mx={5}>
          News App
        </Heading>
        <Spacer />

        <HStack spacing={4} display={{base: "none", md: "block"}}>
          <ChakraLink
            as={Link}
            to="/"
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
            mr={8}
          >
            Home
          </ChakraLink>

          <ChakraLink
            as={Link}
            to="/about"
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
            mr={8}
          >
            About
          </ChakraLink>

          <ChakraLink
            as={Link}
            to="/contact"
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
            mr={8}
          >
            Contact
          </ChakraLink>
        </HStack>

        <Spacer />

        <IconButton
          display={display}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
        />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <VStack spacing={4} align="start" mt={4}>
          <ChakraLink
            as={Link}
            to="/"
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
          >
            Home
          </ChakraLink>
          <ChakraLink
            as={Link}
            to="/about"
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
          >
            About
          </ChakraLink>
          <ChakraLink
            as={Link}
            to="/contact"
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
          >
            Contact
          </ChakraLink>
        </VStack>
      </Collapse>
    </Box>
  );
};

export default Navbar;
