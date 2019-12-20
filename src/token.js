const jwt = require('jsonwebtoken');

const generateJwt = () => {
    const payload = {
        email: 'justinyum98@gmail.com',
    };
    const options = {
        expiresIn: '14d',
    };
    return jwt.sign(payload, process.env.JWT_SECRET, options);
};

module.exports = {
    generateJwt,
};
