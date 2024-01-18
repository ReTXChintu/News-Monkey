import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import NewsFeed from "./components/NewsFeed";
import MoreNewsPage from "./components/MoreNewsPage";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = (setLoading) => setIsLoading(setLoading);
  return (
    <ChakraProvider>
      <Router>
        <NavBar isLoading={isLoading} />
        <Routes>
          <Route exact path="/" element={<NewsFeed toggleLoading={toggleLoading} />} />
          <Route exact path="/topnews" element={<MoreNewsPage toggleLoading={toggleLoading} title={"Top Headlines"} url={'top-headlines?country=in'} />} />
          <Route exact path="/localnews" element={<MoreNewsPage toggleLoading={toggleLoading} title={"Local News"} url={'everything?q=ahmedabad'} />} />
          <Route exact path="/picksforyou" element={<MoreNewsPage toggleLoading={toggleLoading} title={"Top Picks For You"} url={'everything?domains=techcrunch.com,thenextweb.com'} />} />
          <Route exact path="/india" element={<MoreNewsPage toggleLoading={toggleLoading} title={"India"} url={'everything?q=india'} />} />
          <Route exact path="/world" element={<MoreNewsPage toggleLoading={toggleLoading} title={"World"} url={'everything?q=world'} />} />
          <Route exact path="/science" element={<MoreNewsPage toggleLoading={toggleLoading} title={"Science"} url={'everything?q=science'} />} />
          <Route exact path="/cricket" element={<MoreNewsPage toggleLoading={toggleLoading} title={"Cricket"} url={'everything?q=cricket'} />} />
          <Route exact path="/sports" element={<MoreNewsPage toggleLoading={toggleLoading} title={"Sports"} url={'everything?q=sports'} />} />
          <Route exact path="/technology" element={<MoreNewsPage toggleLoading={toggleLoading} title={"Technology"} url={'everything?q=technology'} />} />
          <Route exact path="/business" element={<MoreNewsPage toggleLoading={toggleLoading} title={"Business"} url={'everything?q=business'} />} />
          <Route exact path="/health" element={<MoreNewsPage toggleLoading={toggleLoading} title={"Health"} url={'everything?q=health'} />} />

          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
