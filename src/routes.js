const user = require('./api/user/user.route');

function routesConfig(app) {
  app.use('/api/auth/local', user);
  app.use('/api/lists', list);
}

module.exports = { routesConfig };
