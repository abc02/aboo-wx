const Koa = require('koa')
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const crypto = require('crypto')
const logger = require('koa-logger')
const wechat = require('co-wechat')
const API = require('co-wechat-api');
const keys = require('./config/keys')
const buttons = require('./config/buttons')

const app = new Koa()
const api = new API(keys.appid, keys.appsecret)

const index = require('./routes/index')
// const users = require('./routes/users')

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
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
// app.use(users.routes(), users.allowedMethods())
app.use(async (ctx, next) => {
  if(ctx.path === '/wechat') {
    let { signature, timestamp, nonce, echostr } = ctx.request.query
    /*  加密/校验流程如下： */
    // 1. 将token、timestamp、nonce三个参数进行字典序排序
    let array = [ keys.token, timestamp, nonce ]
    array.sort();
    let str = array.join('')
  
    //2. 将三个参数字符串拼接成一个字符串进行sha1加密
    let sha1Code = crypto.createHash("sha1");
    var code = sha1Code.update(str,'utf-8').digest("hex");
  
    //3. 开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
    if(code === signature){
        ctx.body = echostr
        await next()
    }else{
        ctx.body = "error"
    }
  }
})
app.use(async (ctx, next) => {
  var result = await api.createMenu(buttons)
  console.log(result)
  console.log(ctx.request.query)
})


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
