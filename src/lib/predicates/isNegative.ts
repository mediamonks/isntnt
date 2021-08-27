import { Predicate } from '../types'
import { isNumber } from './isNumber'

/**
 * Checks if a value is a negative number, including -0.
 */
export const isNegative: Predicate<number> = (
  value: unknown,
): value is number =>
  isNumber(value) && (value === 0 ? Infinity / value : value) < 0
