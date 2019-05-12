const sinon = require('sinon');
const { fake } = sinon;
const { expect } = require('chai');

describe('fake', function() {
  it('returns', function() {
    let sayHi = fake.returns('hi');

    expect(sayHi()).to.equal('hi');
    expect(sayHi.callCount).to.equal(1);
  });

  it('throws', function() {
    let throwError = fake.throws(new Error('test sinon throw error'));

    expect(throwError).to.throw(Error, /test sinon/);
  });

  it('resolves', function(done) {
    let fakeResolve = fake.resolves(1);
    fakeResolve()
      .then(res => {
        expect(res).to.equal(1);
        done();
      })
      .catch(e => {
        done(e);
      });
  });
});
