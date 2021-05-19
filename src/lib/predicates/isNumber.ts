import { Predicate, PredicateType } from '../types'

export const isNumber: Predicate<number> = <T>(value: T): value is PredicateType<number, T> =>
  typeof value === 'number' && value === value
