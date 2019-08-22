import Router from 'koa-router';
import User from '../controller/test';
const router = new Router({ prefix: '/api' });

/*插入文章接口*/
router.post('/user/getUser', User.getUsersList);
module.exports = router;