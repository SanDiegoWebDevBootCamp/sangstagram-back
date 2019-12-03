const registerRoute = (app, route) => {
    const { verb, path, handler } = route;
    app[verb](path, handler);
};

module.exports = {
    registerRoute,
};
