//include Node.js
const http = require('http');

//set port
const port = 3000;

//Create server, deal with requests/responses
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  //default HTML
  res.statusCode = 200;
  res.end('<h1>Welcome to Node.js!</h1><p>Please add interesting info here.</p>');

});

//Set server to listen for requests
server.listen(port, () => {
  console.log(`Server running at port: ${port}/`);
});
