import { Predicate, PredicateType } from '../types'

export const isFunction: Predicate<Function> = <U>(value: U): value is PredicateType<Function, U> =>
  typeof value === 'function'
