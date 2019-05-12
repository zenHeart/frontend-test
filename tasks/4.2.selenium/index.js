const webdriver = require('selenium-webdriver');
const { By, Browser } = webdriver;

let driver = new webdriver.Builder().forBrowser(Browser.CHROME).build();
window = driver.manage().window();

//设置窗口大小
// https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_Window.html
window.setRect({
  height: 800,
  width: 500
});

//跳转到百度
driver.get('http://www.baidu.com');
driver.findElement(By.id('kw')).sendKeys('test');