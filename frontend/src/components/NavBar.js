import React from "react";
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
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import logo from "../logo.jpg";

const Navbar = () => {
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
            />
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
        <Tabs>
          <TabList>
            <Tab>Home</Tab>
            <Tab>For You</Tab>
            <Tab>Followings</Tab>
            <Tab>India</Tab>
            <Tab>World</Tab>
            <Tab>Local</Tab>
            <Tab>Science</Tab>
            <Tab>Cricket</Tab>
            <Tab>Sports</Tab>
            <Tab>Technology</Tab>
            <Tab>Business</Tab>
            <Tab>Science</Tab>
            <Tab>Health</Tab>
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
