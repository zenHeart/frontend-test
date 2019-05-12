// 详见 https://nightwatchjs.org/api
module.exports = {
    'Demo test baidu' : function (browser) {
        browser
            .url('http://www.baidu.com') 
            .waitForElementVisible('body', 2000)
            .setValue('#kw', 'nightwatch')
            .waitForElementVisible('#su', 2000)
            .click('#su')
            .pause(1000)
            .assert.containsText('#content_left', 'Night Watch')
            .end();
    }
};