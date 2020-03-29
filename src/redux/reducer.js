/* 
reducer函数模块：根据当前state和指定action返回一个新的state(返回处理后的应用状态)
*/

import { INCREMENT, DECREMENT } from './action-types'

// 管理count状态数据的reducer，接收两个参数：state, action
export default function count(state = 0, action) {
  console.log('旧的state',state,action);
  
  switch (action.type) {
    case INCREMENT:
      return state + action.data
    case DECREMENT:
      return state - action.data
    default:
      return state;
  }
}