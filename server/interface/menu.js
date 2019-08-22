import Router from 'koa-router';
import Menu from '../dbs/models/menu'
const router = new Router({ prefix: '/menu' });

router.get('/getMenu', async(ctx, next) => {
  try {
    let result = await Menu.find();
    if (result) {
      ctx.body = {
        code: 0,
        list: result
      }
    } else {
      ctx.body = {
        code: -1,
        list: []
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      list: []
    }
  }
})

export default router