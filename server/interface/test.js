import Router from 'koa-router';
import Test from '../dbs/models/test'
const router = new Router({ prefix: '/test' });

router.get('/testData', async(ctx, next) => {
  try {
    let result = await Test.find();
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

router.post('/setTestData', async(ctx, next) => {
  try {
    let test = new Test({ title: 'fxf' });
    test.save();
    ctx.body = {
      code: 0
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      list: []
    }
  }
})

export default router