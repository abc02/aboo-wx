const router = require('koa-router')()
const wechat_api = require('../wechat_robot').wechat_api;

router.post('/createmenu', async (ctx, next) => {
    let buttons = ctx.request.body
    let result = await wechat_api.createMenu(buttons)
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

router.get('/getmenu', async (ctx, next) => {
    let result = await wechat_api.getMenu()
    ctx.status = 200
    ctx.body = { 
        ...result
    }
})

router.get('/removemenu', async (ctx, next) => {
    let result = await wechat_api.removeMenu()
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

router.get('/getmenuconfig', async (ctx, next) => {
    let result = await wechat_api.getMenuConfig()
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
