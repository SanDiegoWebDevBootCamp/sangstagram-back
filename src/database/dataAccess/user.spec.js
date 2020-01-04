const faker = require('faker');
const { connectDatabase, disconnectDatabase } = require('../index');
const { createUser, getUser, findOrCreateUser } = require('./user');

describe.skip('User DAL', () => {
    beforeAll(() => {
        connectDatabase();
    });

    afterAll(() => {
        disconnectDatabase();
    });

    it('should create user', () => {
        const user = faker.helpers.userCard();

        expect(createUser(user)).resolves.toEqual(
            expect.objectContaining({
                username: user.username,
                email: user.email,
            }),
        );
    });

    it('should find and create user', () => {
        const user = faker.helpers.userCard();

        expect(findOrCreateUser(user)).resolves.toEqual(
            expect.objectContaining({
                username: user.username,
                email: user.email,
            }),
        );
    });

    it('should find user', () => {
        const user = faker.helpers.userCard();

        createUser(user)
            .then(() => {
                expect(getUser(user.username)).resolves.toEqual(
                    expect.objectContaining({
                        username: user.username,
                        email: user.email,
                    }),
                );
            });
    });
});
