import { Predicate, PredicateType } from '../types'

export const isSymbol: Predicate<symbol> = <T>(value: T): value is PredicateType<symbol, T> =>
  typeof value === 'symbol'
