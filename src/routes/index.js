const { registerRoute } = require('./register');

const routes = [];

const register = (app) => {
    routes.map((route) => registerRoute(app, route));
};

module.exports = {
    register,
};
