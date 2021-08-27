import { Predicate } from '../types'

/**
 * Checks if a value is a boolean.
 */
export const isBoolean: Predicate<boolean> = (value: unknown): value is boolean =>
  typeof value === 'boolean'
