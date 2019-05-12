const { expect } = require('chai');
const { add, asyncAdd } = require('./add');

describe('add', function() {
  it('数字相加返回和', function() {
    expect(add(1, 2)).to.equal(3);
    expect(add(-3, -1)).to.equal(-4);
    expect(add(-3, 2)).to.equal(-1);
  });
});

// 说明 hooks 的执行
describe('hooks', function() {
  before(function() {
    console.log('整个测试套件之前初始化');
    this.testData = {
      input: [1, 2],
      expect: 3
    };
  });

  it('add', function() {
    expect(add.apply(this, this.testData.input)).to.equal(this.testData.expect);
  });

  after(function() {
    console.log('整个测试套件之后执行');
    delete this.testData;
  });

  beforeEach(function() {
    console.log('it 执行之前触发');
  });

  afterEach(function() {
    console.log('it 执行之后触发');
  });
});
