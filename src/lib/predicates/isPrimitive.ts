import { Primitive, Predicate } from '../types'
import { isNone } from './isNone'
import { isFunction } from './isFunction'

export const isPrimitive: Predicate<Primitive> = (value: unknown): value is Primitive =>
  isNone(value) || (typeof value !== 'object' && !isFunction(value))
