import React from 'react';

class SelectBar extends React.Component {
  constructor(){
    super();
    this.state = {
      tab:0
    }
  }
  handleClick(n){
    console.log(n);
    this.setState({tab:n})
  }
  render () {
    let box1=(
      <div>
        <p>选项一</p>
        <p>选项一</p>
        <p>选项一</p>
        <p>选项一</p>
        <p>选项一</p>
      </div>
    )
    let box2=(
      <div>
        <p>选项二</p>
        <p>选项二</p>
        <p>选项二</p>
        <p>选项二</p>
        <p>选项二</p>
      </div>
    )
    let box3=(
      <div>
        <p>选项三</p>
        <p>选项三</p>
        <p>选项三</p>
        <p>选项三</p>
        <p>选项三</p>
      </div>
    )
    return(
      <div>
        <button onClick={this.handleClick.bind(this,0)}>选项一</button>
        <button onClick={this.handleClick.bind(this,1)}>选项二</button>
        <button onClick={this.handleClick.bind(this,2)}>选项三</button>
        {this.state.tab==0 ? box1 :
          this.state.tab==1 ? box2 : box3}
      </div>
    )
  }

}

export default SelectBar;
