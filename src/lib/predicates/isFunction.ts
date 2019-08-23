import { Predicate } from '../types'

export const isFunction: Predicate<Function> = (
  value: any,
): value is Function => typeof value === 'function'
