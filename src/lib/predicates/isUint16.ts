import { isUint } from './isUint'
import { isPositive } from './isPositive'

const CEILING = Math.pow(2, 16)

/**
 * Checks if a value is an unsigned (positive) integer number from 0 to 65,535.
 */
export const isUint16 = (value: unknown): value is number =>
  isUint(value) && value < CEILING
