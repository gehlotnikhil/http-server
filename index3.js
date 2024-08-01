const http = require('http');

// Define the port to listen on
const port = 80;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, HTTP world!\n');
});

// Make the server listen on the specified port
server.listen(port, () => {
  console.log(`HTTP Server is running on port ${port}`);
});
