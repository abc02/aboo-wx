const router = require('koa-router')()
const crypto = require('crypto')
// const wechat_api = require('../wechat_robot').wechat_api;
const keys = require('../config/keys')
// const buttons = require('../config/buttons')

router.prefix('/wechat')

router.get('/', async (ctx, next) => {
    let { signature, timestamp, nonce, echostr } = ctx.request.query
    /*  加密/校验流程如下： */
    // 1. 将token、timestamp、nonce三个参数进行字典序排序
    let str = [ keys.token, timestamp, nonce ].sort().join('')
    
    //2. 将三个参数字符串拼接成一个字符串进行sha1加密
    let sha1Code = crypto.createHash("sha1");
    var code = sha1Code.update(str,'utf-8').digest("hex");
    
    //3. 开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
    if(code === signature){
        ctx.body = echostr
        await next()
    }else{
        ctx.body = { 
            ret: 1003, 
            code: '微信平台接入失败'
        }
    }
})

module.exports = router
