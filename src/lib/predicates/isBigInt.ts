import { Predicate } from '../types'

/**
 * Checks if a value is a bigint.
 */
export const isBigInt: Predicate<bigint> = (value: unknown): value is bigint =>
  typeof value === 'bigint'
