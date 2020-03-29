// import './App.css';
import { connect } from 'react-redux'
import Counter from '../components/counter'
import { increment, decrement } from '../redux/actions'
// react-redux版本 基础版， App.js为简化版
/* 
容器组件：通过connect包装UI组件产生组件
connect()：高阶函数
connect()：返回的函数是一个高阶组件，接收一个UI组件，生成一个容器组件
容器组件的责任：向UI组件传入特定的属性
*/

/* 
mapStateToProps用来将redux管理的state数据映射成UI组件的一般属性
*/

function mapStateToProps(state) {
  return {
    count: state
  }
}
// es6写法
// const mapStateToProps = (state) => ({count: state});

/* 
mapDispatchToProps用来将包含dispatch代码的函数映射成UI组件的函数属性
*/
function mapDispatchToProps(dispatch) {
  return {
    increment: (number) => dispatch(increment(number)),
    decrement: (number) => dispatch(decrement(number)),
  }
}
// es6写法
// 如果是函数，会自动调用得到对象，将对象中的方法作为函数属性传入UI组件
// const mapDispatchToProps = () => ({
//   increment: (number) => dispatch(increment(number)),
//   decrement: (number) => dispatch(decrement(number)),
// })
// 如果是对象，将对象中的方法包装成一个新函数，并传入UI组件
// 上面可以简写为
// const mapDispatchToProps = {increment, decrement}

export default connect(
  mapStateToProps, // 指定一般属性
  mapDispatchToProps // 指定函数属性
)(Counter)

