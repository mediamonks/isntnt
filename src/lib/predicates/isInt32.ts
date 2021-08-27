import { isInt } from './isInt'

const BOUNDARY = Math.pow(2, 32) / 2

/**
 * Checks if a value is an integer number from -2,147,483,648 to 2,147,483,647.
 */
export const isInt32 = (value: unknown): value is number =>
  isInt(value) && value >= -BOUNDARY && value < BOUNDARY
