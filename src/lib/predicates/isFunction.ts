import { Predicate } from '../types'

export const isFunction: Predicate<Function> = <U>(value: U): value is Extract<U, Function> =>
  typeof value === 'function'
