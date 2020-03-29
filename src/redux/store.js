/* 
redux 核心:store管理应用状态，
store 调用传入的 reducer 函数
store 会把两个参数传入 reducer： 当前的 state 树和 action
*/
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk' // 用来实现redux异步的reudx中间件插件
import reducer from './reducer'

export default createStore(reducer, applyMiddleware(thunk)) // 创建store对象内部会第一次调用reducer()得到初始状态值