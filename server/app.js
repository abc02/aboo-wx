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
// app.use(index.routes(), index.allowedMethods())
// // app.use(users.routes(), users.allowedMethods())

// 微信公众号接入
// app.use(async (ctx, next) => {
//   if(ctx.path === '/wechat') {
//     let { signature, timestamp, nonce, echostr } = ctx.request.query
//     /*  加密/校验流程如下： */
//     // 1. 将token、timestamp、nonce三个参数进行字典序排序
//     let array = [ keys.token, timestamp, nonce ]
//     array.sort();
//     let str = array.join('')
  
//     //2. 将三个参数字符串拼接成一个字符串进行sha1加密
//     let sha1Code = crypto.createHash("sha1");
//     var code = sha1Code.update(str,'utf-8').digest("hex");
  
//     //3. 开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
//     if(code === signature){
//         ctx.body = echostr
//         await next()
//     }else{
//         ctx.body = "error"
//     }
//   }
// })
// app.use(async (ctx, next) => {
//   var result = await api.createMenu(buttons)
//   // console.log(result)
//   // console.log(ctx.request.query)
//   await next()
// })

app.use(wechat({token: keys.token, appid: keys.appid, encodingAESKey: keys.encodingAESKey}).middleware(async (message, ctx) => {
  let { MsgType, Content } = message
  var result = await api.getMenu();
  console.log(JSON.stringify(result))
  // console.log(ctx)
  // if(MsgType === 'text') {
  //     // 微信输入信息就是这个 message
  //   if (Content === 'diaosi') {
  //     // 回复屌丝(普通回复)
  //     console.log('hehe')
  //     return 'hehe';
  //   } else if (Content === 'text') {
  //     //你也可以这样回复text类型的信息
  //     return {
  //       content: 'text object',
  //       type: 'text'
  //     };
  //   } else if (Content === 'hehe') {
  //     // 回复一段音乐
  //     return {
  //       type: "music",
  //       content: {
  //         title: "来段音乐吧",
  //         description: "一无所有",
  //         musicUrl: "http://mp3.com/xx.mp3",
  //         hqMusicUrl: "http://mp3.com/xx.mp3"
  //       }
  //     };
  //   } else if (Content === 'kf') {
  //     // 转发到客服接口
  //     return {
  //       type: "customerService",
  //       kfAccount: "test1@test"
  //     };
  //   } else {
  //     // 回复高富帅(图文回复)
  //     return [
  //       {
  //         title: '你来我家接我吧',
  //         description: '这是女神与高富帅之间的对话',
  //         picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
  //         url: 'http://nodeapi.cloudfoundry.com/'
  //       }
  //     ];
  //   }
  // }

    if (MsgType === 'text') {  
        let reply;  
        switch (Content) {  
            case '12345':  
                reply = '上山打老虎';  
                break;  
            case 'kiki':  
                reply = '是我媳妇';  
                break;  
            default:  
                const msgs = [  
                    '我媳妇老漂亮了',  
                    '我媳妇会做饭',  
                    '我媳妇会煎药',  
                    '我媳妇吃的可多了',  
                    '我媳妇可能睡了',  
                    '我媳妇叫kiki',  
                    '我媳妇会打太极拳',  
                    '我媳妇总掉头发',  
                    '我媳妇可爱哭了',  
                    '我媳妇有点二'  
                ];  
                let rand = Math.floor(Math.random() * msgs.length);  
                reply = msgs[rand];  
        }  
        return reply;  
    } else {  
        return '欢迎光临';  
    }  
}));
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
