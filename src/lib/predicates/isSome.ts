import { Predicate, Some } from '../types'

/**
 * Checks if a value is a value other then `null`, `undefined`, or not NaN.
 */
export const isSome: Predicate<Some> = (value: unknown): value is Some =>
  value != null && Number.isNaN(value) === false
