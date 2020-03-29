/* 
包含n个用来创建action的工厂函数（action creator）
Action 就是一个描述“发生了什么”的普通对象
*/
import { INCREMENT, DECREMENT } from './action-types'
// 加法，同步action：返回对象
export const increment = (number) => ({
  type: INCREMENT,
  data: number
})
// 减法
export const decrement = (number) => ({
  type: DECREMENT,
  data: number
})
// 加法 异步action：返回的是函数
export const incrementAsync = (number) => {
  return dispatch => {
    // 1. 执行异步（定时器，ajax请求，promise等）
    setTimeout(() => {
      // 2. 当前异步任务执行完成时，分发一个同步action
      dispatch(increment(number))
    }, 2000);
  }
}