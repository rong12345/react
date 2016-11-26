import React from 'react';
import TodoList from './component/TodoList';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      items:[
        {title:'dsad',completed:false},
        {title:'adsds',completed:true}
      ]
    }
  }
  handleCompleted(){
    alert('我是父组件方法')
  }
  handleSubmit(e){
    e.preventDefault();
    let inputValue = this.refs.input.value.trim(); //trim消除空格
    this.refs.input.value = null;
    if (inputValue == '' && !inputValue) {
      this.refs.input.focus();
      return alert('不能为空');
    }
    let newItem = {title:inputValue,completed:false};
    this.state.items.push(newItem);
    this.setState({items:this.state.items})
    // let newItems = this.refs.input.value;
    // this.setState(function (prevState) {
    //   return {items:this.state.items.concat(newItems)}
    // });
  }
  render () {
    return(
      <div>
        <h1>TODO</h1>
        <TodoList items={this.state.items} handleCompleted={this.handleCompleted.bind(this)}/>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input placeholder='add a todo' ref='input' />
          <button  type='submit'>ADD # {this.state.items.length+1}
          </button>
        </form>
      </div>
    )
  }
}

export default App;
