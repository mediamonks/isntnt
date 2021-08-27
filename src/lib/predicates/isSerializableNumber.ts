import { isNumber } from './isNumber'

/**
 * Checks if a value is a serializable number (not Infinity).
 */
export const isSerializableNumber = (value: unknown): value is number =>
  isNumber(value) && Math.abs(value) !== Infinity
