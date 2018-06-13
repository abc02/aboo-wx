import { Modal  } from 'antd-mobile';

const alert = Modal.alert;
const UnBindShowAlert = () => {
    const alertInstance = alert('提醒', '确认对这个鞋垫解除绑定？', [
      { text: '确认', onPress: () => console.log('ok'),  style: {color: '#399af7'}},
      { text: '取消', onPress: () => console.log('cancel'), style: {color: 'red'}},
    ]);
    setTimeout(() => {
      // 可以调用close方法以在外部close
      console.log('auto close');
      alertInstance.close();
    }, 500000);
  };

  export default UnBindShowAlert