import { Predicate } from '../types'

export const isNegative: Predicate<number> = (value: any): value is number =>
  typeof value === 'number' && (value === 0 ? Infinity / value : value) < 0
