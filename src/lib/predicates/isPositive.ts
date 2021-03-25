import { Predicate } from '../types'

export const isPositive: Predicate<number> = <T>(value: T): value is Extract<T, number> =>
  typeof value === 'number' && (value === 0 ? Infinity / value : value) > 0
