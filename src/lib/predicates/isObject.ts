import { Predicate } from '../types'
import { isNull } from './isNull'

/**
 * Checks if a value is an object.
 */
export const isObject: Predicate<object> = (value: unknown): value is object =>
  !isNull(value) && typeof value === 'object'
