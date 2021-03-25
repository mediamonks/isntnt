import { Predicate, Primitive } from '../types'
import { isNone } from './isNone'
import { isFunction } from './isFunction'

export const isPrimitive: Predicate<Primitive> = <T>(value: T): value is Extract<T, Primitive> =>
  isNone(value) || (typeof value !== 'object' && !isFunction(value))
