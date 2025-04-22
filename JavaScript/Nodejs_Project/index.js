// index/index.js
// Parse JSON body from request
const getBody = (req, callback) => {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
      try {
        callback(body ? JSON.parse(body) : {});
      } catch (e) {
        callback(null, e);
      }
    });
  };
  
  // Send JSON response
  const sendResponse = (res, status, data) => {
    res.writeHeader('Content-Type', 'application/json');
    res.statusCode = status;
    res.end(JSON.stringify(data));
  };
  
  module.exports = { getBody, sendResponse };