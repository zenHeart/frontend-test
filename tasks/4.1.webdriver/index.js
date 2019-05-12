const axios = require ('axios');
const http = axios.create ({
  baseURL: 'http://localhost:9515/',
  timeout: 5000,
});

var sessionId = '';
//创建会话
http
  .post ('/session', {
    desiredCapabilities: {},
    requiredCapabilities: {},
  })
  .then (response => {
    sessionId = response.data.sessionId;
    // 导航到百度
    return http.post (`/session/${sessionId}/url`, {
      url: 'http://www.baidu.com',
    });
  })
  .then (response => {
    // 定位输入框  
    return http.post (`/session/${sessionId}/element`, {
      using: 'id',
      value: 'kw',
    });
  })
  .then (response => {
    let {data: {value: {ELEMENT: elementId}}} = response;
    return http.post (`/session/${sessionId}/element/${elementId}/value`, {
      value: ['test'],
    });
  })
  .then (response => {
    return http.post (`/session/${sessionId}/window/current/size`, {
      width: 600,
      height: 800,
    });
  })
  .then (response => {
    return http.post (`/session/${sessionId}/window/current/position`, {
      x: 900,
      y: 0,
    });
  })
  .then(() => {
      return new Promise((res,rej) => {
          setTimeout(() => res(),2000)
      })
  })
  .then (response => {
    return http.delete (`/session/${sessionId}/window`);
  })
  .then (response => {
    console.log ('close success');
  })
  .catch (err => {
    console.log (err);
  });
