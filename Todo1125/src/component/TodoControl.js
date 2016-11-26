import React from 'react'

class TodoControl extends React.Component {
  handleClick(i){
    this.props.handleShow(i)
  }
  render () {
    return(
      <div>
        <button onClick={this.handleClick.bind(this,0)}>All</button>
        <button onClick={this.handleClick.bind(this,1)}>Active</button>
        <button onClick={this.handleClick.bind(this,2)}>completed</button>
      </div>
    )
  }
}

export default TodoControl;
