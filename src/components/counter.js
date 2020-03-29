// import './App.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
// react-redux版本的计数器实例

/* 
UI组件，主要用于显示与交互，没有任何redux相关代码
*/
class Counter extends Component {
  static propTypes = {
    // store: PropTypes.object.isRequired
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.numberRef = React.createRef();
  }
  // 增加
  increment = () => {
    // 得到select的值，并转换成数字(*1)
    const number = this.numberRef.current.value * 1;
    // 在原来count上做加法
    this.props.increment(number)

  }
  // 减法
  decrement = () => {
    // 得到select的值，并转换成数字(*1)
    const number = this.numberRef.current.value * 1;
    // 在原来count上做减法
    this.props.decrement(number)
  }
  // 奇数才能加
  incrementIfOdd = () => {
    // 得到select的值，并转换成数字(*1)
    const number = this.numberRef.current.value * 1;
    // 如果是奇数在原来count上做加法
    if (this.props.count % 2 === 1) {
      this.props.increment(number)
    }
  }
  //  延迟2秒才加 
  incrementAsync = () => {
    // 得到select的值，并转换成数字(*1)
    const number = this.numberRef.current.value * 1;
    // 延迟2秒在原来count上做加法
    setTimeout(() => {
      this.props.increment(number)
    }, 2000)
  }
  render() {
    const count = this.props.count;

    return (
      <div className="App">
      <p>点击了 {count} 次</p>
      <div>
        <select ref={this.numberRef}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>奇数才能加</button>
        <button onClick={this.incrementAsync}>延迟2秒才加</button>
      </div>
    </div>
    );
  }
}

export default Counter;
