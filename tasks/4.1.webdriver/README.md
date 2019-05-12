# webdriver 协议
## 验证webdriver 协议
1. 首先查看 google 版本
    ```bash
     /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --version
     # return 67.0.3396.99
    ```
2. 安装对应的版本
    ```bash
    # 选择你的版本
    wget http://npm.taobao.org/mirrors/chromedriver/2.41/chromedriver_mac64.zip    
    ```
3. 启动 `chromerdriver`
4. 运行 `npm run tasks:4.1`


## 参考资料
* [webdriver 规范](https://w3c.github.io/webdriver/)
* [w3c 规范流程](https://www.w3.org/2019/Process-20190301/#rec-advance)
* [webdirver api](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#status)
* [协议差异](https://github.com/facebook/php-webdriver/wiki/JsonWireProtocol-vs.-W3C-WebDriver)
* [chrome driver 使用说明](http://chromedriver.chromium.org/getting-started/chromeos)