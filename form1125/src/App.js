import React from 'react';


class App extends React.Component {
  constructor(){
    super();
    this.state={fontSize:30}
  }
  handleClick(e){
    console.log(e.deltaY);
    this.setState({
      fontSize:this.state.fontSize + e.deltaY/100
    })
  }
  handleContext(e){
    e.preventDefault();
    this.setState({
      show:!this.state.show
    })
  }
  handleJump(e){
    // e.preventDefault();
    //这里阻止默认事件必须是e.preventDefault();
  }
  render () {
    let styles={
      fontSize:`${this.state.fontSize}px`
    }
    return(
      <div onWheel={this.handleClick.bind(this)} style={styles}
        onContextMenu={this.handleContext.bind(this)}>
        App
        {this.state.show ? 'ppppp' : null}
        <a href="https://www.baidu.com" onClick={this.handleJump.bind(this)}>click</a>
      </div>
    )
  }
}

export default App;
