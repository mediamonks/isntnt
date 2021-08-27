import { Predicate } from '../types'

/**
 * Checks if a value is a string.
 */
export const isString: Predicate<string> = (value: unknown): value is string =>
  typeof value === 'string'
