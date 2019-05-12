// 详见配置说明 https://nightwatchjs.org/gettingstarted#configuration
module.exports = {
  webdriver : {
    start_process: true,
    server_path: "chromedriver", 
    port: 9515
  },
  test_settings : {
    default : {
      desiredCapabilities: {
        browserName: "chrome"
      }
    }
  }
}