const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

// Middleware to handle HTTP GET request
app.get('/', (req, res) => {
  res.send('Hello, HTTPS world!');
});

// Reading the SSL certificates
const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

// Creating HTTPS server
https.createServer(options, app).listen(8000, () => {
  console.log('HTTPS Server is running on port 8000');
});
