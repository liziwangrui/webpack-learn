# webpack-learn
## 一直想知道一个完整的好的脚手架是怎么搭建的，于是看了两天，找了好多网上资料，也看了api，却毫无头绪，最后是受到曾老师（智勇大哥）的指点，学习不能一口吃个大胖子，一步步来，先把webpack搞明白，学习都是相通的！嗯，深受启发。。。下面ready。。go！
### webpack的由来
<p>现在的网页都是功能非常丰富的应用，前端的工作变得越来越庞大，不仅仅是复杂的javascript代码还有一堆堆的依赖包，这就给前端开发带来了难度和复杂度，前端慢慢走向模块化开发，为了提高开发效率，又要减轻手动处理的繁琐工作，webpack类的工具相应而生。</p>
### webpack是什么？
<p>WebPack就是是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其打包为合适的格式以供浏览器使用。</p>
### webpack 与 gulp grunt 之比较
<p>webpack的工作原理：它把你的项目打包成一个文件，在webpack看来，你的项目是一个整体，它首先找到入口文件index.js，然后在这个文件里去寻找项目依赖的所有文件，使用loaders去处理它们，最后打包为浏览器可识别的js文件</p>
<br/>
<p>gulp和grunt的工作方式：是你在配置文件里去配置，它会根据你的配置对指明文件进行编译，替换，压缩等任务</p>
### 下面进入正题 开始使用webpack
1. 全局安装webpack
```
npm install -g webpack
```
你也可以在项目中安装
```
npm install --save-dev webpack
```
2. 准备工作
#### 进到项目中，使用npm init 初始化项目（会生成package.json文件，它是一个npm的说明文件，包含了当前项目的依赖模块和自定义的脚本任务等）
```
npm init
```
#### package.json文件已经就绪，在本项目中安装Webpack作为依赖包
```
npm install --save-dev webpack
```
#### 进到该项目文件下，新建两个文件夹，一个是存放我们原始代码的文件，一个是用来存放准备给浏览器读取的数据（包括使用webpack生成的打包后的js文件以及一个index.html文件）
```
mkdir src
mkdir public
cd src
touch main.js
touch greeter.js
cd public && touch index.html
```
#### main.js 用来把greeter模块返回的html插入到页面中
#### greeter.js 用来返回信息
#### 下面我们执行一下 node_modules/.bin/webpack app/main.js public/bundle.js  见证奇迹的时刻～～～
#### 当然我们也可以通过配置文件使用webpack
1. 我们在根目录下新建一个webpack.config.js文件，先进行最基础的配置，包括入口文件路径和存放打包后文件的路径
2. 更快捷的执行打包任务的命令
<p>如果我们每次都要执行下这么一条命令node_modules/.bin/webpack，对于开发来说无非不是一件很痛苦的事情，npm恰恰提供了这样的便利，我可以在package.json文件中进行简单的配置，就可以是冗长的命令变得简洁
```
{
  "name": "webpack-sample-project",
  "version": "1.0.0",
  "description": "Sample webpack project",
  "scripts": {
    "start": "webpack" //配置的地方就是这里啦，相当于把npm的start命令指向webpack命令
  },
  "author": "zhang",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^1.12.9"
  }
}
```
###### webpack.config.js文件
```
module.exports = {
  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  }
}
```
## webpack更快捷的执行打包任务
```
npm给我们提供了很方便的执行命令的方法，在package.json中进行配置
"scripts": {
    "start": "webpack" //配置的地方就是这里啦，相当于把npm的start命令指向webpack命令
  }
npm start是一个特殊的命令，如果对应的脚本不是start，需要npm run加脚本名
```
## webpack的强大功能（生成source map，让调试变的更加容易）
```
eval-source-map 是开发阶段的一个很好的选择，它在不影响项目打包速度的前提下，生成干净的source map
打包后输出的js文件不可避免有安全隐患。
需要在webpack.config.js中添加devtool: 'eval-source-map'
```
## webpack构建本地服务器
```
构建webpack本地服务器，让浏览器实时监测代码修改，自动刷新，提高工作效率
这个就要依赖node.js,需要单独安装作为项目依赖
npm install --save-dev webpack-dev-server
devserver配置选项
contentBase: "./public"
//打包后的文件目录，也是浏览器读取的目录
port: "8080"
//浏览器监听端口
inline:true
//浏览器实时刷新
colors:true
//终端输出命令为彩色
historyApiFallback:true
//不跳转 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
```
## Loaders webpack的重中之重
```
Loaders就是webpack通过配置的脚本命令把相应的文件转成浏览器认识的兼容的文件，比如把新一代的js文件（es6，es7）转换为浏览器可识别的es5的js文件，就当前较火的react项目而言，loaders可以把jsx文件转换为js文件。Loaders需要单独安装，并且在webpack.config.js中的modules关键字下进行配置。
Loaders的配置选项有：
test:匹配loaders要处理的文件名的正则表达式（必须）
loader: loader名（必须）
includer/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选)
query:给loaders提供额外的配置选项（可选）
举个栗子：
我们可以手动建一个json文件,然后安装json-loader npm install --save-dev json-loader
在webpack.config.js中进行如下配置
module: {//在配置文件里添加JSON loader
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      }
    ]
  }
  这样就可以把json文件转为js文件了。
```
## webpack不可缺少的伴侣 babel的安装和配置
```
我们拿react项目做test
```
## webpack值得骄傲的优点  模块化处理方式
```
在webpack中，所有的文件都可以通过配置相应的loaders，对这些文件进行模块化处理，比如javascript,css fonts和图片等等。webpack提供两个工具处理样式表，css-loader 和 style-loader，二者处理的任务不同，css-loader使你能够使用类似@import 和 url(...)的方法实现 require()的功能,style-loader将所有的计算后的样式加入页面中，二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中。
```
## css module
```
随着前端的发展，一个项目可能就需要两个或者更多的人参与，这就导致了css样式表类名的冲突使得修改和维护变得非常复杂和困难，css modules的出现就很好的解决了这个棘手的问题，它主要是把js模块化的思想带到了css里面通过CSS模块，所有的类名，动画名默认都只作用于当前模块。Webpack从一开始就对CSS模块化提供了支持，在CSS loader中进行配置后，你所需要做的一切就是把”modules“传递都所需要的地方，然后就可以直接把CSS的类名传递到组件的代码中，且这样做只对当前组件有效，不必担心在不同的模块中具有相同的类名可能会造成的问题。
你只需要在module里这样配置：
{
  test: /\.css$/,
  loader: 'style!css?modules'//跟前面相比就在后面加上了?modules
}

```
