import type { Predicate } from '../types'
import { isFunction } from './isFunction'
import { isWithLength } from './isWithLength'

/**
 * Checks if a value is an Array-like object.
 */
export const isArrayLike: Predicate<ArrayLike<unknown>> = (
  value: unknown,
): value is ArrayLike<unknown> => isWithLength(value) && !isFunction(value)
