//greeter.js返回包含信息的html元素
// var config = require('./config.json');
// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.textContent = config.greetText;
//   return greet;
// };
import React,{Component} from 'react';
import config from './config.json';
import styles from './greeter.css';

class Greeter extends Component{
  render () {
    console.log('styles',styles)
    return (
      <div className={styles.root}>{config.greetText}</div>
      )
  }
}
export default Greeter;