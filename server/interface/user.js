import Router from 'koa-router';
import Redis from 'koa-redis'
import nodeMailer from 'nodemailer'
import User from '../dbs/models/user'
import Passport from './utils/passport'
import Email from '../dbs/config'
import api from '../../axios'
const router = new Router({ prefix: '/users' });
const Store = new Redis().client;

router.post('/signup', async(ctx) => {
  const { username, password, email, code } = ctx.request.body;
  if (code) {
    const saveCode = await Store.hget(`nodemail:${username}`, 'code');
    const saveExpire = await Store.hget(`nodemail:${username}`, 'expire');
    if (code === saveCode) {
      if (new Date().getTime() - saveExpire > 0) {
        ctx.body = {
          code: -1,
          msg: '验证码已过期，请重新尝试'
        }
        return false
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '请填写正确的验证码'
      }
      return false
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '请填写验证码'
    }
    return false
  }
  const user = await User.find({ username })
  if (user.length) {
    ctx.body = {
      code: -1,
      msg: '已被注册'
    }
    return false
  }
  const nuser = await User.create({ username, password, email })
  if (nuser) {
    const res = await api.login({ username, password })
    if (res.data && res.data.code === 0) {
      ctx.body = {
        code: 0,
        msg: '注册成功',
        user: res.data.user
      }
    } else {
      ctx.body = {
        code: -1,
        msg: 'error'
      }
      return false
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '注册失败'
    }
  }
})

router.post('/signin', async(ctx, next) => {
  return Passport.authenticate('local', function(err, user, info) {
    if (err) {
      ctx.body = {
        code: -1,
        msg: err
      }
    } else {
      if (user) {
        const {
          username,
          email,
        } = user
        ctx.body = {
          code: 0,
          msg: '登录成功',
          userInfo: {
            username,
            email
          }
        }
        return ctx.login(user)
      } else {
        ctx.body = {
          code: -1,
          msg: info
        }
      }
    }
  })(ctx, next)
})

router.post('/verify', async(ctx, next) => {
  const username = ctx.request.body.username
  const saveExpire = await Store.hget(`nodemail:${username}`, 'expire')
  if (saveExpire && new Date().getTime() - saveExpire < 0) {
    ctx.body = {
      code: -1,
      msg: '验证请求过于频繁，1分钟内1次'
    }
    return false
  }
  const transporter = nodeMailer.createTransport({
    service: 'qq',
    auth: {
      user: Email.smtp.user,
      pass: Email.smtp.pass
    }
  })
  const ko = {
    code: Email.smtp.code(),
    expire: Email.smtp.expire(),
    email: ctx.request.body.email,
    user: ctx.request.body.username
  }
  const mailOptions = {
    from: `"认证邮件" <${Email.smtp.user}>`,
    to: ko.email,
    subject: '《居想网》注册码',
    html: `您在居想网中注册，您的注册码是${ko.code}`
  }
  try {
    await transporter.sendMail(mailOptions);
    Store.hmset(`nodemail:${ko.user}`, 'code', ko.code, 'expire', ko.expire, 'email', ko.email);
    ctx.body = {
      code: 0,
      msg: '验证码已发送，可能会有延时，有效期1分钟'
    }
  } catch (err) {
    console.log(err)
    ctx.body = {
      code: -1,
      msg: '发送失败，请核对！'
    }
  }
})

router.get('/exit', async(ctx, next) => {
  await ctx.logout()
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: 0
    }
  } else {
    ctx.body = {
      code: -1
    }
  }
})

router.get('/getUser', async(ctx) => {
  if (ctx.isAuthenticated()) {
    const { username, email } = ctx.session.passport.user
    ctx.body = {
      code: 0,
      userInfo: {
        username,
        email
      }
    }
  } else {
    ctx.body = {
      code: -1,
      userInfo: null
    }
  }
})

router.get('/getUserBlogs', async(ctx) => {
  const userInfo = await User.find({}).populate({ path: 'Blog' });
  ctx.body = {
    userInfo
  }
})

export default router