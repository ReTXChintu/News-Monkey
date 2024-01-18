import React, {  useState } from "react";
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
  Progress,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import logo from "../logo.jpg";
import { Link } from "react-router-dom";

const Navbar = ({isLoading}) => {
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

      console.log(result);
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
            <Link to={"/"}>
              <Tab>Home</Tab>
            </Link>
            <Link to={"/picksforyou"}>
              <Tab>For You</Tab>
            </Link>
            <Link to={"/india"}>
              <Tab display={tabDisplay}>India</Tab>
            </Link>
            <Link to={"/world"}>
              <Tab display={tabDisplay}>World</Tab>
            </Link>
            <Link to={"/localnews"}>
              <Tab display={tabDisplay}>Local</Tab>
            </Link>
            <Link to={"/science"}>
              <Tab display={tabDisplay}>Science</Tab>
            </Link>
            <Link to={"/cricket"}>
              <Tab display={tabDisplay}>Cricket</Tab>
            </Link>
            <Link to={"/sports"}>
              <Tab display={tabDisplay}>Sports</Tab>
            </Link>
            <Link to={"/technology"}>
              <Tab display={tabDisplay}>Technology</Tab>
            </Link>
            <Link to={"/business"}>
              <Tab display={tabDisplay}>Business</Tab>
            </Link>
            <Link to={"/health"}>
              <Tab display={tabDisplay}>Health</Tab>
            </Link>
          </TabList>
          {/*           
          <TabPanels>
            <TabPanel>
              <NewsFeed />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels> */}
        </Tabs>
         <Progress width={"100vw"} size='xs' opacity={isLoading ? 1 : 0} isIndeterminate />
      </VStack>
    </Box>
  );
};

export default Navbar;
