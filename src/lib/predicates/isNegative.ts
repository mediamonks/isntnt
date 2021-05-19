import { Predicate, PredicateType } from '../types'

export const isNegative: Predicate<number> = <T>(value: T): value is PredicateType<number, T> =>
  typeof value === 'number' && (value === 0 ? Infinity / value : value) < 0
