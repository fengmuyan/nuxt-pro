import Koa from 'koa'
import consola from 'consola'
import { Nuxt, Builder } from 'nuxt'
<<<<<<< HEAD
import bodyParser from 'koa-bodyparser'
import json from 'koa-json'
import session from 'koa-generic-session'
=======
import mongoose from 'mongoose'
import bodyParser from 'koa-bodyparser'
import passport from './interface/utils/passport'
import dbConfig from './dbs/config'
import json from 'koa-json'
import session from 'koa-generic-session'
import Redis from 'koa-redis'
import user from './interface/user'
import menu from './interface/menu'
>>>>>>> 1ca04075c4254bfcd1ad456deb64c0e6368a4392

const app = new Koa()
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')
<<<<<<< HEAD
=======

>>>>>>> 1ca04075c4254bfcd1ad456deb64c0e6368a4392
async function start() {
  const nuxt = new Nuxt(config)
  const {
    host = process.env.HOST || '127.0.0.1',
      port = process.env.PORT || 3000
  } = nuxt.options.server
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  app.keys = ['key', 'keykey']
  app.proxy = true
  app.use(session({
    key: 'mt',
<<<<<<< HEAD
    prefix: 'mt:uid'
=======
    prefix: 'mt:uid',
    store: new Redis()
>>>>>>> 1ca04075c4254bfcd1ad456deb64c0e6368a4392
  }))
  app.use(bodyParser({
    enableTypes: ['json', 'form', 'text']
  }))
  app.use(json())
<<<<<<< HEAD
=======
  app.use(passport.initialize())
  app.use(passport.session())

  mongoose.connect(dbConfig.dbs, {
    useNewUrlParser: true
  })
  app.use(user.routes()).use(user.allowedMethods())
  app.use(menu.routes()).use(menu.allowedMethods())
>>>>>>> 1ca04075c4254bfcd1ad456deb64c0e6368a4392
  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false
    ctx.req.ctx = ctx
    nuxt.render(ctx.req, ctx.res)
  })
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()