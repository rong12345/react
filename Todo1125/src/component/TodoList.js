import React from 'react'

class TodoList extends React.Component {
  handleChange(){
    this.props.handleCompleted()
  }
  render () {

    let list=this.props.items.map( item =>
      <div key={Math.random()}>
        <input type='radio' checked={item.completed}
        onChange={this.handleChange.bind(this)} />
        <span style={item.completed ?
          {textDecoration:'line-through',opacity:'0.3'} : null}>{item.title}</span>
        <button>删除</button>
      </div>
    )
    return(
      <div>
         {list}
      </div>
    )
  }
}


TodoList.propTypes = {
  items: React.PropTypes.array
};

export default TodoList;
