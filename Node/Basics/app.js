const express = require("express");

const app = express();

app.get("/", (req,res) => {
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  // res.write("Home page");
  // res.send();
  res.status(200).send("Home Page..")
})

app.all("*", (req,res) => {
  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.write("Page not found.");
  res.send();
})

app.listen(5000,() => {
  console.log("Server is listening on port 5000......");
})