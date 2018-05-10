
const keys = require('../config/keys');
const WechatAPI= require('co-wechat-api');
const wechat_api = new WechatAPI(keys.appid, keys.appsecret);

const robot = require('./robot');

module.exports.wechat_api = wechat_api;
module.exports.robot = robot;