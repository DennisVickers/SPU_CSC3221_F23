const http = require("http");

// Using Event Emiter
const server = http.createServer();

// The "on" method is inherited from the Emitter class
server.on("request", (req,res) => {
  switch (req.url) {
    case "/": 
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write("Home page");
      res.end();
      break;
    case "/about": 
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write("About page");
      res.end();
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write("Page not found.");
      res.end();
  }
});

server.listen(5000);