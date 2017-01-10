//greeter.js返回包含信息的html元素
var config = require('./config.json');
module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = config.greetText;
  return greet;
};
