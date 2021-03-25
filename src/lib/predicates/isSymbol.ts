import { Predicate } from '../types'

export const isSymbol: Predicate<symbol> = <T>(value: T): value is Extract<T, symbol> =>
  typeof value === 'symbol'
