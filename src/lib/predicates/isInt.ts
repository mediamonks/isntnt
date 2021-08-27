import { Predicate } from '../types'
import { isNumber } from './isNumber'

/**
 * Checks if a value is an integer number.
 */
export const isInt: Predicate<number> = (value: unknown): value is number =>
  isNumber(value) && value === Math.floor(value)
