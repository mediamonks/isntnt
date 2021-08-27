import { Predicate } from '../types'

/**
 * Checks if a value is a function.
 */
export const isFunction: Predicate<Function> = (value: unknown): value is Function =>
  typeof value === 'function'
