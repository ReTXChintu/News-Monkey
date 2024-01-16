import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import NewsFeed from "./components/NewsFeed";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact Component={NewsFeed} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
