module.exports = async (message, ctx) => {
    let { Content, CreateTime, Event, FromUserName, MsgId, MsgType, Status, ToUserName } = message
    if (MsgType === 'text') {  
        let date = new Date(Number(CreateTime + '000'))
        let yyyy = date.getFullYear()
        let mm = date.getMonth()
        let dd = date.getDate()
        let hh = date.getHours()
        let minute = date.getMinutes()
        let ss = date.getSeconds()
       return `消息：${Content} , 发送时间：${yyyy}年${mm}月${dd}日 ${hh}:${minute}:${ss}`
    }
    if (MsgType === 'event' && Status === 'success') {
        return Status
    }
  }