const passport = require('passport-http-bearer');

passport.use(new BearerStrategy(
    ((token, done) => {
        User.findOne({ token }, (err, user) => {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            return done(null, user, { scope: 'read' });
        });
    }),
));
