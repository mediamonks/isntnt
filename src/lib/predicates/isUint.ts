import { Predicate } from '../types'
import { isInt } from './isInt'
import { isPositive } from './isPositive'

/**
 * Checks if a value is an unsigned (positive) integer number.
 */
export const isUint: Predicate<number> = (value: unknown): value is number =>
  isInt(value) && isPositive(value) && value !== Infinity
