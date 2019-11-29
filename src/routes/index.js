const { login } = require('./login');
const { logout } = require('./logout');

const routes = [
  login,
  logout,
];

const register = (app) => {
  routes.map((route) => {
    const { verb, path, handler } = route;
    app[verb](path, handler);
  });
};

module.exports = {
  register,
};
