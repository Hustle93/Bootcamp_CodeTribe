// server.js
const http = require('http');
const { handleRoutes } = require('./routes/routes');
const data = require('./data/data');

const server = http.createServer((req, res) => {
  handleRoutes(req, res, data);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});