const router = require('koa-router')()
const crypto = require('crypto')
const wechat_api = require('../wechat_robot').wechat_api;
const keys = require('../config/keys')
const buttons = require('../config/buttons')


router.get('/wechat', async (ctx, next) => {
    let { signature, timestamp, nonce, echostr } = ctx.request.query
    /*  加密/校验流程如下： */
    // 1. 将token、timestamp、nonce三个参数进行字典序排序
    let str = [ keys.token, timestamp, nonce ].sort().join('')
    
    //2. 将三个参数字符串拼接成一个字符串进行sha1加密
    let sha1Code = crypto.createHash("sha1");
    var code = sha1Code.update(str,'utf-8').digest("hex");
    
    //3. 开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
    if(code === signature){
        ctx.status = 200
        ctx.body = echostr
        await next()
    }else{
        ctx.body = { 
            ret: 1003, 
            code: '微信平台接入失败'
        }
    }
})
/**
 * @description 微信公众模板消息推送
 * @param   openid      string      true  
 * @param   templateid  string      true
 * @param   url         string      false
 * @param   topcolor    String      false
 * @param   data        Object      true
 * 
 * 
 */

 /**
  * 绑定申请处理提醒   v
  *     1.设备编号
  *     2.申请用户
  *     3.申请时间
  * 绑定申请成功提醒    v
  * 绑定成功通知
  *     1.设备编号
  *     2.绑定时间
  * 绑定申请拒绝提醒    v
  * 拒绝申请通知    
  *     1.设备编号
  *     2.拒绝时间
  * 管理员身份变更处理提醒
  *     1.设备编号
  *     2.变更时间
  * 设备电量提醒    v
  *     1.设备昵称
  *     2.电量状态
  *     3.提醒时间
  * 设备报警通知   v
  *     1.设备昵称
  *     2.安全守护昵称
  *     3.报警时间
  */

router.post('/SendTemplateInfo', async (ctx, next) => {
    let { openid, templateid, url, topcolor, data } = ctx.request.body
    let result = await wechat_api.sendTemplate(openid, templateid, url, topcolor, data);
    console.log(result)
    if ( result.errcode === 0 &&  result.errmsg === 'ok') {
        ctx.status = 200
    } else {
        ctx.body = { 
            ...result
        }
    }
})

module.exports = router
