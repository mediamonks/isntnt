import { isInt } from './isInt'

const BOUNDARY = Math.pow(2, 16) / 2

/**
 * Checks if a value is an integer number from -32,768 to 32,767.
 */
export const isInt16 = (value: unknown): value is number =>
  isInt(value) && value >= -BOUNDARY && value < BOUNDARY
