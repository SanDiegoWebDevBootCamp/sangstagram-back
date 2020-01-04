const faker = require('faker');
const { connectDatabase } = require('./index');
const { findOrCreateUser } = require('./dataAccess/user');

describe.skip('Data Access', () => {
    beforeAll(() => {
        connectDatabase();
    });

    it('should add user', (done) => {

        const userInfo = {
            username: `randomuser+${Date.now()}`,
            email: faker.internet.email(),
        };
        findOrCreateUser(userInfo, (err, { username, email }) => {
            expect(username).toEqual(userInfo.username);
            expect(email).toEqual(userInfo.email);

            done();
        });
    });
});
