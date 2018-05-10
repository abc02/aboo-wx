module.exports = async (message, ctx) => {
    let { MsgType, Content } = message
    console.log( MsgType, Content )
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
  }