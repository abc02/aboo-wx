const router = require('koa-router')()
const wechat_api = require('../wechat_robot').wechat_api;

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
  * 管理员变更通知  v
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

 router.post('/sendtemplate', async (ctx, next) => {
    let { openid, templateid, url, topcolor, data } = ctx.request.body
    let result = await wechat_api.sendTemplate(openid, templateid, url, topcolor, data);
    if ( result.errcode === 0 &&  result.errmsg === 'ok') {
        ctx.status = 200
        ctx.body = { 
            msg: 'ok'
        }
    } else {
        ctx.body = { 
            ...result
        }
    }
})



module.exports = router
