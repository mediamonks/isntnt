import { Predicate, Some } from '../types'

/**
 * Checks if a value is a value other then `null`, `undefined`, or not NaN.
 *
 * Using `value === value` for the NaN check instead of `Number.isNaN(value) === false` 
 * because it's slightly faster (~1%).
 */
export const isSome: Predicate<Some> = (value: unknown): value is Some =>
  value != null && value === value
