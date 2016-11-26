import React from 'react';
import Header from './components/Header';

// 创建主键App:用类写
class App extends React.Component {
  render () {
    return(
      <div>
        <Header />
      </div>
    )
  }
}

//创建主键方法二
// function App(){
//   return <div>我是App2</div>;
// }


//es5创建类
// var App = React.createClass({
//   render:function(){
//     return <div>我是App3</div>;
//   }
// });


// var ele = React.getElementById(
//
// )
export default App;
