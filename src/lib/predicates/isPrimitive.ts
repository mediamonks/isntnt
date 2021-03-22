import { Primitive } from '../types'
import { isNone } from './isNone'
import { isFunction } from './isFunction'

export const isPrimitive = <T>(value: T): value is Extract<T, Primitive> =>
  isNone(value) || (typeof value !== 'object' && !isFunction(value))
