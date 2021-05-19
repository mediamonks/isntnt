import { Predicate, PredicateType } from '../types'

export const isBoolean: Predicate<boolean> = <T>(value: T): value is PredicateType<boolean, T> =>
  typeof value === 'boolean'
