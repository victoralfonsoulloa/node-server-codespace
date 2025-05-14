//include Node.js
const http = require('http');

//set port
const port = 3000;

//Create server, deal with requests/responses
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
});

//Set server to listen for requests
server.listen(port, () => {
  console.log(`Server running at port: ${port}/`);
});
