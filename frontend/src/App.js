import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import NewsFeed from "./components/NewsFeed";
import TopNewsPage from "./components/TopNewsPage";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<NewsFeed />} />
          <Route exact path="/topnews" element={<TopNewsPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
