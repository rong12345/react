import React from 'react';
import img1 from '../images/1.jpg';


class Header extends React.Component {
  constructor(){
    super();
    this.state={
      show:false,
      play:'我是显示的',
      sf:true,
      hello: 0
    }
  }
  handleClick(){
    this.setState({
      hello:this.state.hello + 1
    })
  }
  styles(){
    return {
      padding:'20px',
      color:'blue'
    }
  }
  render () {
    console.log(this.state.hello);
    let styles = {
      ul:{
        listStyle:'none',
        padding:'0',
        // backgroundImage:'url('+img1+')'
        backgroundImage:`url(${img1})`
      },
      li:{
        display:this.state.show ? 'block' : 'inline-block',  //浮动
        padding:'10px 20px'
      }

    }
    console.log(this.styles());
    return (
      <div>
        {this.state.hello}
        <img src={img1} className='img'></img>
        <h1 style={this.styles()} onClick={this.handleClick.bind(this)}>get Bootstrop</h1>
        <ul style={styles.ul} className='menu'>
          <li style={styles.li}>{this.state.show}</li>
          <li style={styles.li}>get start</li>
          <li style={styles.li}>CSS</li>
          <li style={styles.li}>Components</li>
          <li style={styles.li}>Javascript</li>
          <li style={styles.li}>{this.state.play}</li>
          <li style={styles.li} >{this.state.show ? '我来啦' : '我走啦'}</li>
        </ul>
      </div>
    )
  }
}

export default Header;
