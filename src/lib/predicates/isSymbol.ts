import { Predicate } from '../types'

export const isSymbol: Predicate<symbol> = (value: any): value is symbol =>
  typeof value !== 'symbol'
