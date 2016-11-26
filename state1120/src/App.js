import React from 'react';
import Header from './components/Header';

// 创建主键App:用类写
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      // fruit:'草莓'
      fruit:true
    };
  }
  myEvent(){
    this.setState({
      // fruit:'樱桃'
      fruit:!this.state.fruit
    })
  }
  // handleClick(){
  //   console.log('我喜欢的水果');
  // }

  render() {
    // if (this.state.fruit){
    //   var content = '草莓';
    // }else{
    //   var content = '樱桃';
    // }
    // let content = this.state.fruit ? '草莓' : '樱桃'
    let styles={
      div:{
        width:'500px',
        height:'400px',
        backgroundColor:'#6200EA',
        display:this.state.fruit ? 'none' : 'block'
      }
    }
    return (
      <div onClick={this.myEvent.bind(this)}>
        <p>我喜欢{this.state.fruit ? '草莓' : '樱桃'}</p>
        <div style={styles.div}></div>
      </div>
    );
  }
}

export default App;
