const user = require('./api/user/user.route');
const lists = require('./api/list/list.route');
const fav = require('./api/fav/fav.route');

function routes(app) {
  app.use('/auth/local', user);
  app.use('/api/fav', fav);
  app.use('/api/lists', lists);
}

module.exports = routes;
