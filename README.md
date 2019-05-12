# 分享题目
前端测试自动化实践

## 课程目标
让听众可以将前端自动化测试用在工作和学习中

## 课程大纲
* 测试概述
  * 为什么需要测试？
  * 按照测试级别,测试金字塔 (V 模型)

  > 本章重点是介绍测试金字塔作为下文的衔接
* 单元测试
  * 基本示例
    > 说明测试软件的类型,包括 测试框架,断言库，测试运行器,测试辅助工具
  * 测试环境
    * 简述浏览器端,node 端测试的差异 
    * karma 使用
  * 测试手段
      * 状态验证和行为验证
      * 异步测试
      * 桩和替身
        > 详细讲解 mock,stub,spy 等测试替身手段及适用场景
  * 单元测试的经验
    * 测试原则
    * 从测试中学习
* 集成测试
  * 接口测试
    * supertest, (postman 考虑是否讲解)
  * 组件测试, JSDOM 和无头浏览器 
* 系统测试
  * E2E 测试 
  > 重点讲解 webdriver 协议和 selnium


涉及的测试工具包括:

* `karma` 浏览器测试运行器
* `mocha` node 测试运行器
* `jest` 和 `jasmine` 单元测试工具
* `sinon` 测试替身工具
* `selnium-driver` e2e 测试工具
* 酌情考虑是否讲解 `nigthwatch` 和 `cypress` 等端到端工具


未涉及可以延续的内容.
* 性能测试
* 安全测试
* UI 测试
  > 这部分没有相关实践,无法讲解