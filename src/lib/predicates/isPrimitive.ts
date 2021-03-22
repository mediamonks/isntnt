import { Predicate, Primitive } from '../types'
import { isNone } from './isNone'
import { isFunction } from './isFunction'

export const isPrimitive = ((value: any) =>
  isNone(value) || (typeof value !== 'object' && !isFunction(value))) as Predicate<Primitive>
