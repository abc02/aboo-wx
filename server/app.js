const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const crypto = require('crypto')

// config
const keys = require('./config/keys');

// wechat
const wechat = require('co-wechat');
// const wechat_api = require('./wechat_robot').wechat_api;
const wechat_robot = require('./wechat_robot').robot;

// routes
// const index = require('./routes/index')
// const users = require('./routes/users')
const wechatAccess = require('./routes/wechatAccess')
const menu = require('./routes/menu')
const template = require('./routes/template')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
// app.use(async (ctx, next) => {
//   const start = new Date()
//   await next()
//   const ms = new Date() - start
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
// })

// routes
// app.use(index.routes(), index.allowedMethods())
// app.use(users.routes(), users.allowedMethods())
app.use(wechatAccess.routes(), wechatAccess.allowedMethods())
app.use(menu.routes(), menu.allowedMethods())
app.use(template.routes(), template.allowedMethods())

// wechat robot
app.use(wechat({
  token: keys.token,
  appid: keys.appid,
  encodingAESKey: keys.encodingAESKey
}).middleware(wechat_robot));

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
