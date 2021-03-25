import { Predicate } from '../types'

export const isNegative: Predicate<number> = <T>(value: T): value is Extract<T, number> =>
  typeof value === 'number' && (value === 0 ? Infinity / value : value) < 0
