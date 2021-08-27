import { Primitive, Predicate } from '../types'
import { isNone } from './isNone'
import { isFunction } from './isFunction'

/**
 * Checks if a value is a primitive value (a boolean, bigint, number, string, symbol, `undefined`, or `null`).
 */
export const isPrimitive: Predicate<Primitive> = (value: unknown): value is Primitive =>
  isNone(value) || (typeof value !== 'object' && !isFunction(value))
