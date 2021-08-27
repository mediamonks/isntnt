import { Predicate } from '../types'

/**
 * Checks if a value is a symbol.
 */
export const isSymbol: Predicate<symbol> = (value: unknown): value is symbol =>
  typeof value === 'symbol'
