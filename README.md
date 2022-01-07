# 微前端框架
此项目仅供学习使用，未使用到实际开发中，可以使用[乾坤](https://qiankun.umijs.org/zh/guide)

## 为什要自己手写这个框架？
  首先自己接触的这个框架最早，和其他框架对比后比较喜欢qiankun的风格配置，从子应用注册到，实现机制比较喜欢，不太喜欢iframe实现的框架，所以自己实现下框架的思路更好的理解。

## 以下是对qiankun学习实现过程中的一些知识总结和一下
### 先要了解清楚几个概念
1. 什么是微前端？
  微服务的架构理念，核心在于将一个庞大的前端应用拆分成多个独立灵活的小型应用，每个应用都可以独立开发、独立运行、独立部署，再将这些小型应用融合为一个完整的应用，或者将原本运行已久、没有关联的几个应用融合为一个应用。
3. 什么是主应用和子应用？
  主应用是指微前端的本体应用，子应用都是在主应用中运行 
4. 子应用是如何在主应用中切换路由的？
  在子应用打包的时候加上唯一的子应用前缀来表示子应用，类似于项目A和项目B,的路由打包出来后的一级路由是/a开始的

## 实现

### 一、第一步实现子应用的注册
～～～ 
首先要准备应用的配置信息，然后就是子应用渲染问题了，渲染有两种方式：`路由匹配`和`手动加载`，我们先来实现路由加载的方式渲染子应用
#### 1.1 实现路由加载的配置
～～～
子应用的切换和渲染是通过路由path匹配实现的，首先要定义好子应用的配置信息，通过监听路由挂在组件就可以了
```
import { registerMicroApps, start } from 'qiankun';
import register from './register';
qiankun.registerMicroApps(register) 
start()
```

现在手写的方式和qiankun官网的实现方式有一些不同，只是方法命名不同，我是按照个人喜好设计的，没有个设计者都有自己喜欢的设计思路和喜欢的风格。

##### 1.1.1 registerMicroApps
registerMicroApp函数就是保存配置的路由和子应用的匹配关系

##### 1.1.2 start
start 开启路由监听
##### 1.1.3 实现路由监听
路由分为hash和history,两种，

hash：
```js
window.addEventListener('hashchange', function() {
  // todo
}, false);
```
history:
---
history路由比较特殊像使用`popstate`,监听`history.go`,`history.back`,`history.forward`这些动作
但是 `history.push`,`history.replace`时间不能监听到
```js
const todo = ()=>{}
window.addEventListener('popstate', todo, false);

```
#### 1.2 挂载应用
##### 1.2.1 匹配到对应的路由加载不同应用的资源

##### 1.2.2 将请求回来的html资源挂在在DOM节点上
但是浏览器有限制问题，通过innerHTML挂在的资源中，script中的src地址不会加载，需要手动加载并执行

#### 1.2.3 css样式隔离
通过 shadow

```
const DOM = document.createElement('DOM');
const shadowRoot = DOM.attachShadow({mode: 'open'});
shadowRoot.innerHTML = '<h1>innerHTML</h1>'; 
```