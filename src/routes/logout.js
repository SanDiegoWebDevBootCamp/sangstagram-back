const logout = {
  verb: 'delete',
  path: '/logout',
  handler: (req, res) => {
    console.log('Loggin out.');
    res.send('Success!');
  },
};

module.exports = {
  logout,
};
