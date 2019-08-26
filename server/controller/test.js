import User from '../models/user'
/**
 * private API
 * @method getUsersList
 * @param {object} 接收发布文章接口传递对象值
 * @return {object|null}  insert Front article
 */

export let getUsersList = async(ctx) => {
  try {
    console.log(1111)
    ctx.body = {
      error: 0,
      success: 'ok'
    }
  } catch (e) {
    ctx.body = {
      error: 1,
      info: e
    }
  }
}

/**
 * private API
 * @method addUser
 * @param {object} 接收发布文章接口传递对象值
 * @return {object|null}  insert Front article
 */
export let addUser = async(ctx) => {
  try {
    let user = new User({ username: 'fengsaikng22', password: 'yg0JJ7Fon9zsncNsXoseKQ==' });
    user.save();
    ctx.body = {
      error: 0,
      success: 'ok'
    }
  } catch (e) {
    ctx.body = {
      error: 1,
      info: e
    }
  }
}