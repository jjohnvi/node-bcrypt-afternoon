const usersOnly = (req, res, next) => {
  if (!req.session.user) {
    res.status(401).json("Please log in, idiot");
  }
  next();
};

const adminsOnly = (req, res, next) => {
  if (!req.session.user.isAdmin) {
    res.status(403).json("Imposter");
  }
  next();
};

module.exports = {
  usersOnly,
  adminsOnly
};
