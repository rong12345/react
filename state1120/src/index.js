import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './main.css';

import Zhu from './Zhu';
import Test from './Test';
import SelectBar from './SelectBar';

var root = document.getElementById('root')
ReactDOM.render(<SelectBar />,root);




// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }
//
// setInterval(tick, 1000);
