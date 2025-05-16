module.exports = function (router) {
  // definiuje trasę /wyborcza/magazyn
  router.get('/wyborcza/magazyn', require('./wyborcza/magazyn'));
};
