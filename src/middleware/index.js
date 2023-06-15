export const localsMiddleware = (req, res, next) => {
  res.locals.path = req.originalUrl;
  next();
};

export const authMiddleware = (req, res, next) => {
  res.locals.user = req.session?.user;
  next();
};

export const checkAuth = (req, res, next) => {
  if (!req.session?.user) return res.sendStatus(500);
  return next();
};
