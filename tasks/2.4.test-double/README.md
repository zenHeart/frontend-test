# 测试替身
测试替身是一种及其使用的测试手段,
测试替身具有如下意义

* 解耦复杂测试,为了保证单元测试独立性,你可以利用

## 概述
1. 概念定义
2. 解决了什么问题？

当涉及网络,数据库等依赖时,测试难度会增大。
* 你需要模拟服务器环境
* 你需要模拟数据库环境
* 测试环境可能挂掉,增加了测试的不稳定性


## 测试替身的种类


### dummy
象传递但从未实际使用过。通常它们仅用于填充参数列表。

### spy
spy 记录函数调用过程包括
* 函数的调用次数
* 函数每次调用的传入参数
* ...


## stub
代指那些包含了预定义好的数据并且在测试时返回给调用者的对象。Stub 常被用于我们不希望返回真实数据或者造成其他副作用的场景。为什么不用 DB

属于状态验证

## mock
预先编程的，具有预期，形成了预期接收的呼叫的规范。如果他们收到他们不期望的电话，他们可以抛出异常，并在验证期间进行检查，以确保他们得到了他们期望的所有电话。

属于行为验证

## fake
模拟行为,已符合测试环境。是生产对象的简化版。

例如 memoryDB 或 memoryFile

## 测试替身的最佳实践
1. 区分函数类型
* 无副作用的函数,只依赖于入参,执行返回相同值
* 有副作用的函数,除了入参还依赖于其他对象,
例如 DB,存储等,函数的结果由入参和依赖共同决定

> **测试替身的目的是剔除副作用!,确保测试的执行结果一致！**

## 参考资料
* [ ] [Mocks Aren't Stubs](https://martinfowler.com/articles/mocksArentStubs.html)
* [Martin Fowler TestDouble](https://martinfowler.com/bliki/TestDouble.html)
* [测试替身](https://zhuanlan.zhihu.com/p/26942686)
*  [best-practices-for-spies-stubs-and-mocks-in-sinon-js](https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js)