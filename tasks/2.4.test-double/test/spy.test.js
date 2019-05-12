const sinon = require('sinon');
const { spy } = sinon;
const { expect } = require('chai');

describe('spy', function() {
   it('anonymous spy',function() {
      let fakeCb = spy();
      function callCb(save) {
          save();
      }
  

      //断言回调被执行
      expect(fakeCb.called).to.false
      callCb(fakeCb)
      expect(fakeCb.called).to.true
   })
   it('test spy callwith',function() {
      let fakeCb = spy();
      function callCb(message,cb) {
          cb(message);
      }

      //断言回调被执行
      expect(fakeCb.called).to.false
      callCb('demo',fakeCb)
      expect(fakeCb.called).to.true
      expect(fakeCb.calledWith('demo')).to.true
      
   })

   it('spy object method',function() {
      let ajax = {
         http:(url,data) => {
            return {
               a:1
            }
         }
      }

      spy(ajax,'http')
      let res = ajax.http('/test',{a:1})
      expect(res).to.deep.equal({
         a:1
      })
      expect(ajax.http.calledOnce).to.be.true
      expect(ajax.http.getCall(0).args[0]).to.equal('/test')
      ajax.http.restore() //恢复默认特性

   })
   //更详细的参数参见  <https://sinonjs.org/releases/v7.2.3/spies/>
});
