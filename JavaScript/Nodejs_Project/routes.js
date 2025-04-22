// routes/routes.js
const { getBody, sendResponse } = require('../index/index');

const handleRoutes = (req, res, data) => {
  const { movies, series, songs } = data;
  const parsedUrl = require('url').parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  // Route mapping
  const routes = {
    '/movies': movies,
    '/series': series,
    '/songs': songs
  };

  const dataArray = routes[pathname];

  if (!dataArray) {
    sendResponse(res, 404, { error: 'Route not found' });
    return;
  }

  // GET: Return all items
  if (method === 'GET') {
    sendResponse(res, 200, dataArray);
    return;
  }

  // POST: Add new item
  if (method === 'POST') {
    getBody(req, (body, error) => {
      if (error || !body) {
        sendResponse(res, 400, { error: 'Invalid request body' });
        return;
      }
      const newItem = { id: dataArray.length + 1, ...body };
      dataArray.push(newItem);
      sendResponse(res, 201, dataArray);
    });
    return;
  }

  // PUT: Update item by id
  if (method === 'PUT') {
    getBody(req, (body, error) => {
      if (error || !body || !body.id) {
        sendResponse(res, 400, { error: 'Invalid request body or missing id' });
        return;
      }
      const index = dataArray.findIndex(item => item.id === body.id);
      if (index === -1) {
        sendResponse(res, 404, { error: 'Item not found' });
        return;
      }
      dataArray[index] = { ...dataArray[index], ...body };
      sendResponse(res, 200, dataArray);
    });
    return;
  }

  // DELETE: Remove item by id
  if (method === 'DELETE') {
    getBody(req, (body, error) => {
      if (error || !body || !body.id) {
        sendResponse(res, 400, { error: 'Invalid request body or missing id' });
        return;
      }
      const index = dataArray.findIndex(item => item.id === body.id);
      if (index === -1) {
        sendResponse(res, 404, { error: 'Item not found' });
        return;
      }
      dataArray.splice(index, 1);
      sendResponse(res, 200, dataArray);
    });
    return;
  }

  // Handle unsupported methods
  sendResponse(res, 405, { error: 'Method not allowed' });
};

module.exports = { handleRoutes };