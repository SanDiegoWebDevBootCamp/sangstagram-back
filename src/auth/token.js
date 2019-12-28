const jwt = require('jsonwebtoken');

const generateJwt = ({ googleId, email }) => {
    const payload = {
        googleId,
        email,
    };
    const options = {
        expiresIn: '14d',
    };
    return jwt.sign(payload, process.env.JWT_SECRET, options);
};

module.exports = {
    generateJwt,
};
