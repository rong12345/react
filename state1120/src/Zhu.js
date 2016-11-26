import React from 'react';
import anniu from './images/anniu.png'

// 创建主键App:用类写
class Zhu extends React.Component {
  constructor(){
    super();
    this.state = {
      show:true
    };
  }
  handleClick(){
    this.setState((prevState,props) => ({show:!this.state.show})
      //console.log(prevState,props);
      // return{
      //   show:!this.state.show
      // }
    )
  }
  render() {
    let styles={
      div:{
        left:this.state.show ? '0' : '-200px'
      }
    }
    return (
      <div>
        <img src={anniu} className="anniu"  onClick={this.handleClick.bind(this)}/>
        <div className="cover" onClick={this.handleClick.bind(this)}
          style={{display:this.state.show ? 'block' : 'none'}}>
        </div>
        <div className="menu" style={styles.div}>
          <img src={anniu} onClick={this.handleClick.bind(this)} className="anniu" />
          <h3>Title</h3>
          <p>主页</p>
          <p>登陆</p>
          <p>注册</p>
        </div>
    </div>
    );
  }
}

export default Zhu;
