import { Predicate, Some } from '../types'

/**
 * Checks if a value is a value other then `null` or `undefined`.
 */
export const isSome: Predicate<Some> = (value: unknown): value is Some =>
  value != null && value === value
