import { Predicate, PredicateType, Some } from '../types'

export const isSome: Predicate<Some> = <T>(value: T): value is PredicateType<Some, T> =>
  value != null && value === value
