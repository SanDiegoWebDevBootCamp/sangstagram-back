const login = {
    verb: 'post',
    path: '/login',
    handler: (req, res) => {
        console.log('Loggin in.');
        res.send('Success!');
    },
};

module.exports = {
    login,
};
