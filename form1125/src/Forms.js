import React from 'react';

class Forms extends React.Component {
  constructor(){
    super();
    this.state={value:'va'}
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.value);
  }
  handleChange(e){
    this.setState({value:e.target.value})
  }
  render () {
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input name="aaa" placeholder="value" value={this.state.value}
          onChange ={this.handleChange.bind(this)} ref='input'/>
          <button type='submit'>提交</button>
          <button type='reset'>重置</button><br/>
          <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          A
          <input onChange={this.props.handleCheck}  name="goodCheckbox" type="checkbox" value="A"/>
          B
          <input onChange={this.props.handleCheck} name="goodCheckbox" type="checkbox" value="B" />
          C
          <input onChange={this.props.handleCheck} name="goodCheckbox" type="checkbox" value="C" />
        </form>
      </div>
    )
  }
}

export default Forms;
