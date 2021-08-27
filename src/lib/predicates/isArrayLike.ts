import { ArrayLike, Predicate } from '../types'
import { isFunction } from './isFunction'
import { isWithLength } from './isWithLength'

/**
 * Checks if a value is an Array-like object.
 */
export const isArrayLike: Predicate<ArrayLike> = (value: unknown): value is ArrayLike =>
  isWithLength(value) && !isFunction(value)
