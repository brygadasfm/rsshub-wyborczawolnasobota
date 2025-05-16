const Router = require('koa-router');
const router = new Router();

// tutaj inne routery, a poniżej nasz
router.use('/wyborcza', require('./wyborcza'));

module.exports = router;
