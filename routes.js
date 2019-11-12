'use strict';
const simple = require('./handlers/simple');
const userObjJSON = require('./userObj');

module.exports = function(app, opts) {
  // Setup routes, middleware, and handlers
  app.get('/', simple);

  app.post('/personObject', personObjectRoute);
  app.get('/personObject', personObjectRoute);
};

const personObjectRoute = (req, res) => {
  console.log('START');
  console.log(req);
  console.log('END');
  res.send(userObjJSON);
};
