/* 
包含n个用来创建action的工厂函数（action creator）
Action 就是一个描述“发生了什么”的普通对象
*/
import { INCREMENT, DECREMENT } from './action-types'
// 加法
export const increment = (number) => ({
  type: INCREMENT,
  data: number
})
// 减法
export const decrement = (number) => ({
  type: DECREMENT,
  data: number
})