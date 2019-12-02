const { login } = require('./login');
const { logout } = require('./logout');
const { registerRoute } = require('./register')

const routes = [
  login,
  logout,
];

const register = (app) => {
  routes.map((route) => registerRoute(app, route));
};

module.exports = {
  register,
};
