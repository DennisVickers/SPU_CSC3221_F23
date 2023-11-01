const express = require("express");

// Create the express http server
const app = express();

app.get("/", (req,res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("Home page");
  res.send();
  // res.status(200).send("Home Page");  // Alternate syntax
});

app.get("/about", (req,res) => {
  res.status(200).send("About Page");
});

app.all("*", (req,res) => {
  res.status(404).send(`${req.url} page not found`);
});

app.listen(5000,() => {
  console.log(`Server is listening on port 5000...`);
});