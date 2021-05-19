import { Predicate, PredicateType } from '../types'

export const isInt: Predicate<number> = <T>(value: T): value is PredicateType<number, T> =>
  typeof value === 'number' && value === Math.floor(value)
