import { isUint } from './isUint'
import { isPositive } from './isPositive'

const CEILING = Math.pow(2, 8)

/**
 * Checks if a value is an unsigned (positive) integer number from 0 to 255.
 */
export const isUint8 = (value: unknown): value is number =>
  isUint(value) && value < CEILING
