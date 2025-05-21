//include Node.js
const http = require('http');

//set port
const port = 3000;

//Create server, deal with requests/responses
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  switch(req.url){
    case '/':
      res.statusCode = 200;
      res.end('<h1>Welcome to our Home Page!</h1><p>Please add interesting info here.</p>');
      break;

    case '/about':
      res.statusCode = 200;
      res.end('<h1>Welcome to Victor Ulloa\'s About Page!</h1><p>We are using Node.js for this project!</p>');
      break;

    default:
      res.statusCode = 404;
      res.end('<h1>File Not Found</h1><p>Please add interesting info here.</p>');
      break;
  }

  //default HTML


});

//Set server to listen for requests
server.listen(port, () => {
  console.log(`Server running at port: ${port}/`);
});