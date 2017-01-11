//main.js用来把Greeter返回的模块插入到页面中
// var greeter = require('./greeter.js');
// document.getElementById('root').appendChild(greeter());
import React from 'react';
import {render} from 'react-dom';
import Greeter from './greeter';
import './main.css';

render(<Greeter/>,document.getElementById('root'));
