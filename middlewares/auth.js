module.exports = auth = (req, res, next) => {
  console.log(req.session);
  // if (!req.session) return res.redirect('/login');

  res.locals.loggedIn = req.session.loggedIn;

  return next();
};
