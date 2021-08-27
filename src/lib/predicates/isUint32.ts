import { isUint } from './isUint'

const CEILING = Math.pow(2, 32)

/**
 * Checks if a value is an unsigned (positive) integer number from 0 to 4,294,967,295.
 */
export const isUint32 = (value: unknown): value is number =>
  isUint(value) && value < CEILING
