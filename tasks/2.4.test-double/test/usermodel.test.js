const {setupNewUser} = require('./fixture/usermodel');
const sinon = require('sinon')
const Database = require('./fixture/database')

describe('usermodel', function() {
  it('should call save once', function() {
    let save = sinon.spy(Database, 'save');

    setupNewUser({ name: 'test' }, function() {});

    save.restore();
    sinon.assert.calledOnce(save);
  });

  it('should pass object with correct values to save', function() {
    var save = sinon.spy(Database, 'save');
    var info = { name: 'test' };
    var expectedUser = {
      name: info.name,
      nameLowercase: info.name.toLowerCase()
    };
  
    setupNewUser(info, function() { });
  
    save.restore();
    sinon.assert.calledWith(save, expectedUser);
  });


});
