//main.js用来把Greeter返回的模块插入到页面中
var greeter = require('./Greeter.js');
document.getElementById('root').appendChild(greeter());
