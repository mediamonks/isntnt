import { Predicate } from '../types'

/**
 * Checks if a value is a valid (not-NaN) number.
 */
export const isNumber: Predicate<number> = (value): value is number =>
  typeof value === 'number' && value === value
