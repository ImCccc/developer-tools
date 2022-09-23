import { message } from 'antd';
const errorTip = (msg: string) => message.error(msg);

const request = <T>(url: string, params = {}, method = 'POST') =>
  new Promise<T>((resolve, reject) => {
    fetch(url, {
      method,
      body: JSON.stringify(params || {}),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (res.status === 404) {
          return {
            code: res.status,
            message: '找不到资源',
          };
        }
        if (res.status === 500) {
          return {
            code: res.status,
            message: '服务器报错',
          };
        }
        return res.json();
      })
      .then((res) => {
        if (res.code === 200) {
          return resolve(res.data as T);
        } else {
          errorTip(res.message);
          return reject(res);
        }
      })
      .catch((error) => {
        errorTip('未知错误');
        reject(error);
      });
  });

export default request;
