const faker = require('faker');
const { connectDatabase, disconnectDatabase } = require('../index');
const { createPost } = require('./post');

describe.skip('Post DAL', () => {
    beforeAll(() => {
        connectDatabase();
    });

    afterAll(() => {
        disconnectDatabase();
    });

    it('should add a new post', () => {
        const payload = {
            user: faker.helpers.userCard(),
            photoUrl: faker.image.nature(),
            caption: faker.random.words(),
        };

        expect(createPost(payload)).resolves.toEqual(expect.objectContaining({
            photoUrl: payload.photoUrl,
            caption: payload.caption,
        }));
    });
});
