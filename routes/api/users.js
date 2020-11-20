const userRouter = require('express').Router();
const passport = require('../../config/passport');
const db = require('../../models');
const authMiddleware = require('../../config/middleware/authMiddleware');

userRouter.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/api/users/unauthorized',
    failureFlash: true,
  }),
  (req, res, next) => {
    console.log('sign in successful');
    res.json({
      user: req.user,
      loggedIn: true,
    });
  },
);

userRouter.post('/signup', (req, res, next) => {
  db.User.findOne({ username: req.body.username }, (err, user) => {
    if (err) throw err;
    if (user) {
      console.log('user already exists');
      return res.json('user already exists');
    }
    if (!user) {
      db.User.findOne({ email: req.body.email }, (error, useremail) => {
        if (error) throw error;
        if (useremail) {
          return res.json('email is already in use');
        }
        if (!useremail) {
          const newUser = new db.User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
          });
          newUser.password = newUser.generateHash(req.body.password);
          newUser.save((error2) => {
            if (error2) throw error2;
            console.log('user saved!');
            res.redirect(307, '/api/users/login');
          });
        }
      });
    }
  });
});

userRouter.get('/unauthorized', (req, res, next) => {
  res.json({
    error: req.flash('error'),
    message: 'user not authenticated',
  });
});

userRouter.get('/profile', authMiddleware.isLoggedIn, (req, res, next) => {
  res.json({
    user: req.user,
    loggedIn: true,
  });
});

userRouter.get('/logout', authMiddleware.logoutUser, (req, res, next) => {
  res.json('User logged out successfully');
});

userRouter.get('/admin', authMiddleware.isAdmin, (req, res, next) => {
  res.json({
    user: req.user,
    loggedIn: true,
  });
});

module.exports = userRouter;