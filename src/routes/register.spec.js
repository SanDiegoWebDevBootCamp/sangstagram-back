const { registerRoute } = require('./register')

describe('registerRoute', () => {
    let app;

    beforeEach(() => {
        app = {
            post: jest.fn(),
            get: jest.fn(),
            delete: jest.fn(),
            put: jest.fn()
        }
    })

    it('should register a route with a handler', () => {
        const postRoute = {
            verb: 'post',
            path: '/postRoute',
            handler: () => {}
        }

        registerRoute(app, postRoute)

        expect(app.post).toHaveBeenCalledWith(postRoute.path, postRoute.handler);
    })
})