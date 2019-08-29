import { Predicate } from '../types'

export const isPositive: Predicate<number> = (
  value: unknown,
): value is number =>
  typeof value === 'number' && (value === 0 ? Infinity / value : value) > 0
