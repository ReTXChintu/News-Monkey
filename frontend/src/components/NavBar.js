import React, { useEffect, useState } from "react";
import {
  Box,
  HStack,
  Image,
  Tooltip,
  InputGroup,
  InputLeftElement,
  Input,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Avatar,
  Spacer,
  VStack,
  Tabs,
  TabList,
  Tab,
  useBreakpointValue,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import logo from "../logo.jpg";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const tabDisplay = useBreakpointValue({ base: "none", md: "block" });

  const search = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}`,
        {
          headers: {
            "X-Api-Key": "8831c698656342c59446d6cd1f0fd74d",
          },
        }
      );

      if (!response.ok) console.log(response.error);

      const result = await response.json();

      console.log(result.articles);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      px={4}
      position={"sticky"}
      top={0}
      zIndex={1}
      backgroundColor={"white"}
      mt={2}
    >
      <VStack>
        <HStack w={"100%"}>
          <Tooltip label="News Monkey" aria-label="A tooltip">
            <Image src={logo} width={"50px"} borderRadius={"full"} />
          </Tooltip>

          <Spacer />

          <InputGroup w={"50%"}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="txt"
              placeholder="search for topics, locations, sources"
              onChange={(event) => {
                setQuery(event.target.value);
              }}
            />
            <InputRightElement pointerEvents={"pointer"}>
              <Button colorScheme="blue" onClick={search}>
                <SearchIcon />
              </Button>
            </InputRightElement>
          </InputGroup>

          <Spacer />

          <Menu>
            <MenuButton>
              <Avatar src="" name="Biswajit Panda" w={"50px"}></Avatar>
            </MenuButton>
            <MenuList>
              <MenuItem>My Preferences</MenuItem>
              <MenuItem>Sign Out</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
        <Tabs overflowX={"auto"}>
          <TabList>
            <Tab>Home</Tab>
            <Tab>For You</Tab>
            <Tab>Followings</Tab>
            <Tab display={tabDisplay}>India</Tab>
            <Tab display={tabDisplay}>World</Tab>
            <Tab display={tabDisplay}>World</Tab>
            <Tab display={tabDisplay}>Local</Tab>
            <Tab display={tabDisplay}>Science</Tab>
            <Tab display={tabDisplay}>Cricket</Tab>
            <Tab display={tabDisplay}>Sports</Tab>
            <Tab display={tabDisplay}>Technology</Tab>
            <Tab display={tabDisplay}>Business</Tab>
            <Tab display={tabDisplay}>Science</Tab>
            <Tab display={tabDisplay}>Health</Tab>
          </TabList>
          {/* 
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels> */}
        </Tabs>
      </VStack>
    </Box>
  );
};

export default Navbar;
