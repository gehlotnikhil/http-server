const http = require('http');

// Define the port to listen on
const port = 8000;

// Function to handle incoming requests
const requestHandler = (req, res) => {
  const { method, url } = req;

  if (url === '/' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('GET request to the root URL\n');
  } else if (url === '/' && method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`POST request to the root URL with data: ${body}\n`);
    });
  } else if (url === '/' && method === 'PUT') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`PUT request to the root URL with data: ${body}\n`);
    });
  } else if (url === '/' && method === 'DELETE') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('DELETE request to the root URL\n');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Route not found\n');
  }
};

// Create the HTTP server
const server = http.createServer(requestHandler);

// Make the server listen on the specified port
server.listen(port, () => {
  console.log(`HTTP Server is running on port ${port}`);
});
