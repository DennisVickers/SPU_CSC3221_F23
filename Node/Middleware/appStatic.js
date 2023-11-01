// Very similar to setting up of a server with http module
const express = require("express");
const path = require("path");
const app = express();

// Setup static and middleware code
app.use(express.static("./public"));

app.all("*", (req,res)=>{
  res.status(404).send("<h1>Page Not Found...</h1>");
});

// start listening
const appName = "Simple Site";
const port = 5000;
app.listen(port, ()=>{
  console.log(`${appName} is running on port ${port}`);
});