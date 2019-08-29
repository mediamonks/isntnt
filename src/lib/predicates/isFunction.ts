import { Predicate } from '../types'

export const isFunction: Predicate<Function> = (
  value: unknown,
): value is Function => typeof value === 'function'
