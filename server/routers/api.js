import Router from 'koa-router';
import { getUsersList } from '../controller/test';
const router = new Router({ prefix: '/api' });

/*插入文章接口*/
router.post('/user/getUser', getUsersList);
export default router