const userRoutes = require('./users');

module.exports = (router) => {
  router.use('/users', userRoutes);
};
