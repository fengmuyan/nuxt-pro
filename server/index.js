import Koa from 'koa'
import consola from 'consola'
import { Nuxt, Builder } from 'nuxt'
import mongoose from 'mongoose'
import bodyParser from 'koa-bodyparser'
import dbConfig from './models/db'
import json from 'koa-json'
import session from 'koa-generic-session'
import api from './routes/api'

const app = new Koa()
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

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
    prefix: 'mt:uid'
  }))
  app.use(bodyParser({
    enableTypes: ['json', 'form', 'text']
  }))
  app.use(json())
  mongoose.connect(dbConfig.dbs, {
    useNewUrlParser: true
  })
  app.use(api.routes()).use(api.allowedMethods())
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