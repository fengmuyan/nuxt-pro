import User from '../models/user'
/**
 * private API
 * @method getUsersList
 * @param {object} 接收发布文章接口传递对象值
 * @return {object|null}  insert Front article
 */

export const getUsersList = async(ctx) => {
  try {
    ctx.body = {
      error: 0,
      success: ok
    }
  } catch (e) {
    ctx.body = {
      error: 1,
      info: e
    }
  }
}