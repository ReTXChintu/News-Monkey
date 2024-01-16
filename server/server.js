const app = require("express")();
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("04f1b673e0a740ffb9242a259348ba91");


app.listen(8000, () => {
  console.log("Server connected to PORT 8000");
});
