import { Predicate } from '../types'

export const isSymbol: Predicate<symbol> = (value: unknown): value is symbol =>
  typeof value === 'symbol'
