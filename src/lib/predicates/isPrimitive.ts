import { Primitive, Predicate } from '../types'

export const isPrimitive: Predicate<Primitive> = (
  value: any,
): value is Primitive =>
  value == null || (typeof value !== 'object' && typeof value !== 'function')
