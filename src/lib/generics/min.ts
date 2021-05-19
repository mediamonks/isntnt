import { isNumber } from '../predicates'
import { Predicate, PredicateType } from '../types'

export const min =
  (floor: number): Predicate<number> =>
  <T>(value: T): value is PredicateType<number, T> =>
    isNumber(value) && value >= floor
