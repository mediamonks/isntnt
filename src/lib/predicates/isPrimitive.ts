import { Predicate, PredicateType, Primitive } from '../types'
import { isFunction } from './isFunction'

export const isPrimitive: Predicate<Primitive> = <T>(
  value: T,
): value is PredicateType<Primitive, T> =>
  value == null || (typeof value !== 'object' && !isFunction(value))
