---
layout: default
title: Lacerta - 大型前端面试攻略
permalink: /
---

## Preface
本教程最终的**愿景**是形成一部**中英双语**的

> 当把这个页面上的所有文章学习完毕，全世界的前端岗位都可以随便挑选 🐶

**大型前端面试教程**。

我们不会采用目前市面上绝大部分前端面试题收集以及攻略使用的**提出问题并解决该问题**的撰写方式。

而会遵循：

> 提出问题 -> 分析问题 -> 解决问题 -> 提出延伸问题 -> 分析问题 -> 解决问题 ...

的**无限递归模式**。

如对文章内容有任何问题或者有好的面试问题想要添加，欢迎随时提交**PR**或在**Issues**中提出。

**本教程的章节设置依靠作者们认为的重要程度排序，当时间比较紧迫时，请至少要看完Angular之前的内容，特别是第一章面试篇！**

本教程**Github地址**：[Lacerta](https://github.com/draupnirstudio/Lacerta)

本教程**Github Issues地址**：[Lacerta Issues](https://github.com/draupnirstudio/Lacerta/issues)


## Interview
- Interview Preparation
    - [前端面试需要准备什么]({{ site.baseurl }}{% link frontend-interview/interview/interview-preparation/frontend-interview-preparation.md %})
    - [如何找工作]({{ site.baseurl }}{% link frontend-interview/interview/interview-preparation/job-seeking.md %})
    - 简历内容应该写什么
        - 我之前的教育经历不是很理想，怎么办
        - 我之前的工作经历不是很理想，怎么办
    - 准备过程中需不需要花精力在数据结构与算法上
    - 我只在国内找工作，需不需要投入经历在英语上
    
- Interviewing
    - 面试官到底想要了解什么
    - [如何回答面试问题]({{ site.baseurl }}{% link frontend-interview/interview/interviewing/interview-questions-answering.md %})
    - 面试过程中如果我不会怎么办

- Career Development
    - 毕业了是去小公司还是大公司
    - [前端职业规划]({{ site.baseurl }}{% link frontend-interview/interview/career-development/frontend-engineer-career.md %})

## Data Structure && Algorithm
- Time & Space Complexities
- Sorting
	- BubbleSort
	- QuickSort
	- Selection Sort
	- Merge Sort
	- Insertion Sort
- String Manipulation
- Linked Lists
- Hash Tables
- Stack & Queue
- Searching
	- DFS
	- BFS
	- [Binary Search]({{ site.baseurl }}{% link frontend-interview/algorithm/search/binary-search.md %})
- Graph
- Tree
- Heap

## Computer Science Basics
- [Binary]({{ site.baseurl }}{% link frontend-interview/cs-basics/binary.md %})

## HTML
- [HTML History]({{ site.baseurl }}{% link frontend-interview/html/html-history.md %})
    - WHATWG
    - W3C
- HTML Global Attributes
- HTML Tags
    - [doctype]({{ site.baseurl }}{% link frontend-interview/html/html-tags/doctype.md %})
    	- doctype 历史与作用
    	- 严格模式与混合模式
    	- doctype 类型
    	- HTML5 doctype 如何定义
    - head
    - meta
    - link
    - script
    - body
    - [p]({{ site.baseurl }}{% link frontend-interview/html/html-tags/p.md %})
    - a
        - rel="noopener" && window.opener
    - div
    - img
    	- title 与 alt 的区别
    	- 当div包裹img时，在div下方为何会有间距
    - span
    - form
    	- autocomplete
    - fieldset
    - input
        - 如何设置input的高度
    - table
        - 如何添加单元格左右间距
    - canvas
- HTML 5
    - Upload image and get thumbnail
    - HTML5 浏览器兼容
    - HTML5 新特性
    - 离线缓存及其工作原理
    - 应用程序缓存(Application Cache)
    - cookies vs session storage vs local storage
    - 浏览器是怎么对HTML5的离线储存资源进行管理和加载的呢？
    - `download` attribute
- Web Components
- Web Socket
	- 什么是Socket
	- BroadCast
	- ChatRoom
- Async vs. Defer
- Aria Labels
- Tag Roles
- MISC
	- 文本流与文档流
	- iframe的缺点
	

## CSS
- CSS History
- CSS3
	- 选择器Selector
	- 选择器优先级
	- 新增伪类
	- 可继承属性
- Beizier Curve
- CSS3 Animation
- CSS 盒模型
- Flex
    - [margin](https://juejin.im/post/5ce60afde51d455ca04361b1?utm_source=gold_browser_extension)
- Grid
- Float
- CSS Position
	- absolute
	- relative
	- static
	- fixed
	- sticky
- CSS Display
	- display 分别有那些属性
	- display: none vs visibility: hidden;
- CSS Reset vs CSS Normalize
- BFC(Block Formatting Context)
- Pseudo Classes
- Grid Systems
- Layout
    - 垂直居中
    - 水平居中
    - 如何设置Sticky Footer
    - 不添加`position`属性的时候，为什么使用`top`, `bottom`, `left`, `right`之后无作用
    - 如何拓展Button的点击区域
    - 外边距折叠(Margin Collapsing)
    
- Responsive Design
	- Media Query
- Adaptive Design
- Specificity
- Namespacing
- Sprite Image
- CSS Hack
        
- CSS Pre-Processors
    - Sass
    - Less
- MISC
	- 单行截断、多行截断
	- 页面导入样式时，使用link和@import有什么区别？
	- 实现当用户点击完<a>链接之后，在该链接之后添加“已阅读”三个字的功能

## Javascript
- Grammar
    - Type
        - Object
            - 检测一个对象有某个key
            - 检测一个对象有某个值
        - Null
            - 检测一个变量是否为空
        - Undefined
            - 检测一个变量是否未定义
        - String 
        - Number
        - Symbol
        	- Situation
        - Function     
- Closure
	- this
- ES6
	- New Features
	- Set Implementation
- Prototype
- Inheritence
- Scoping
- Event Bubbling
- Hoisting
- Module
- Currying
- Promise & Callbacks
	- Implementation
	- Promise.all
	- Promise.race
- Runtime
- Event Loop
- Ajax
- Deep Copy vs. Shallow Copy
- Process
- Throttle & Debounce
- Optimization
- CORS
- Browser && DOM
	- Create Element one by one or using innerHTML?(https://stackoverflow.com/questions/2946656/advantages-of-createelement-over-innerhtml)
	- window.onload vs document.onload
	- 获取一个页面上所有不重复HTML tag的数量
	- Selecting & Finding Nodes
	- Traverse up and down (parentNode, firstChild, lastChild, childNodes)
	- Traverse left and right (previousSibling, nextSibling)
- MISC
	- implement ES6 sprintf
	- implement REGEX matching

## Browser & Web Basics
- CORS
- Page Rendering
    - 浏览器地址栏输入网址，敲回车后，到页面展示在浏览器里，这之间，发生了什么
    - 加载JS与CSS会阻塞浏览器的渲染吗？下载JS以及CSS呢？
- V8
- Image Optimization
- Browser Engine
    - Webkit
    - Blink
    - Trident
    - Gecko
- Event Loop
- Document Fragments
- Node Caching
- Local Notifications
- GeoLocation
- Lazy Loading
- Prefetch & Preload
- SSR vs. SPA
- CSR vs. SSR vs. Universal Rendering
- State Management
- Async Flow(hidden iframe, script tags, XHR, websocket - server send event)
- Multi Device Support
- REST vs. RPC
- Asset Delivery(CDN, inline)
- JSONP
- Cache
	- E-Tag
	- Last-Modified
	- Version Hash
- Critical Rendering Path
- Service Workers
- Bundle Splitting
- HTTP/2 and Server-Push
- Minimizing Browser Reflows
- Rendering Performance
- Browser layout vs Compositing vs Painting


## Network
- TCP/IP
	- 三次握手
	- 四次挥手
- WebSocket
- UDP
- DNS
	- DNS Name Resolution Process
- HTTP
	- HTTP Status Codes
- HTTPS
	- 简述HTTPS秘钥交换过程
- TLS
- HTTP2 / HTTP3
- OSI

## Security
- XSS
	- Content-Security-Policy
- CSRF
- Hash Flooding 
- SQL Injection
- Middle-man Attack
- DNS Hijacking
- Page Hijacking
- Authentication
	- JWT
	- OAuth

## Typescript
- Grammar
    - 如何定义函数类型
- Index Signature
- Decorator
- Compiler

## RXJS
- Observables
- Subscriptions
- Subject
- switchMap, exhaustedMap, map, concatMap
- pipe
- catchError
- Hot & Cold Observerables
- Debugging

## NGINX
- Load Balance
- Proxy vs. Reverse Proxy
- Static Files Serving
- Rewrite


## SEO
- Meta Tags
- SiteMap
- Robots.txt
- Server Side Rendering
- Keyword Optimization
- HTML Semantics

## Lodash
- _.set
- _.get
- _.isNil
- _.isNull
- _.isFunction
- _.remove

## Angular
- Directives
- Pipes
- Child Router
- `<ng-content>`
- AOT
- Digest Cycle
- Form Validation
	- Custom Validator
	- Cross Field Validation
	- Async Validation
	- Control status CSS classes
- Dependency Injection
- Life Cycle Hooks
- Dirty Checking
- BOM
- Transclusion
- Zone.js
- Dev Tools
- Custom Library
- Dynamic Routing

## React
- Diff
- React Router
- Component Life Cycle
- Service Worker
- Hooks
- Semantics
- setState
- Redux

## Vue
- Life Cycle
- nextTick
- Component Interaction
- Proxy
- Vue Reactivity System
- VNode
- Two Way Binding
- Vuex
	- Vuex vs. Mobx vs. Redux
	- Data Flow

## NodeJS
- I/O
- Event Driving Programming
- Event Loop
- REPL
- Debug
- LibUV
- EventEmitter
- Streams
- DNS Module
- Express.JS
    - Express Middleware
- gRPC
- Authentication
    - Passport.JS
- Nodejs as a middle tier

## MySQL
- SQL
- Disaster Recovery
- Read Write Splitting
- MyISAM
- InnoDB
- MYSQL Proxy
- Master & Slave
- Information_Schema
- Security
    - SQL Injection
- Index
    - Optimization
- Collation
- View
- Trigger
- Primary Key & Foreign Key
- Procedure
- Transactions
    - Rollback
- Lock
    - Optimization
- Permission
- Optimization
    - SQL Optimization
- MISC
    - LAST_INSERT_ID
    - Data Integrity
    
## Redis
- I/O
- Data Type
- Sentinel
- Replication
- Transaction
- Persistence
	- RDB 
	- AOF
- Cluster
	- Codis
- Redis vs Memcached
- Read Write Splitting
- Optimization
- Expire Policy
	- Active
	- Passive
	- LRU Algorithm


## Git
- Git Principles
- Rebase
- Reset
- Git Flow
- Git Workflow
- Git vs SVN




## Package Managers
- NPM
- Yarn

## Design Patterns
- Factory
- Singleton
- Prototype
- Behavioral
- Builder
- Decorator
- Facade
- Revealing Module
- Abstract Factory
- Chain of Responsibility
- Publish-Subscribe
- Observer
- Adapter
- Delegate
- Mediator

## Build Tools && Dev Tools
- Webpack
	- plugins
	- loaders
	- optimization
	- hot-reload
- Grunt
- Babel
- Browserify
- Chrome Dev Tools
- Lighthouse
- Workbox


## Architecture
- MVC
	- MVC的数据流向
- MVVM
- VIPER
	- VIPER的意义

## System Design
- Methodology
- Taobao
- Facebook
- Wechat
- 12306
- Uber
- Twitch
- Youtube


## Testing
- Testing Frameworks
	- Jest
	- Mocha
- Unit Test
	- Unit Test Principals
- UI Test
- Automation Test
- Code Coverage


## Backend
- GraphQL
- SpringBoot
- Laravel
- Ruby On Rails
- JVM

## DevOps
- Docker
- K8S
- Travis
- Jenkins
- JIRA
- CI/CD

## iOS
- OC
    - Macros
    - Runtime
- Swift
    - Grammar
    - Mirror
    - Inheritance
    - Enums
- RunLoop
- Mach-O
- Optimization
- Instrument
- CocoaPods
- GCD
- Auto Layout

## Progressive Web Apps

## Marketing
- UV/PV
- Persona
- User Retention

## Linux
- Cron Jobs
- Hosts
- Firewall
- SSH
- Permissions

## AWS
- EC2
- EBS
- RDS

## Web Assembly

## Fun Concept
- RubberDuck Debugging

## MISC
- Build the layout and interactions of common web applications, such as the Netflix browser site.
- Implement widgets like a date picker, carousel or e-commerce cart.
- Write a function similar to debounce or clone an object deeply.

## Reference & Collections
- [per-FE-Interview](https://github.com/Docyue/per-Frontend-Interview)


## Acknowledgement
- [Google](https://www.google.com/)
- [Github](https://github.com/)
- [StackOverflow](https://stackoverflow.com)
- [Google Web](https://developers.google.com/web/)