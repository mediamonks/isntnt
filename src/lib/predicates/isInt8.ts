import { isInt } from './isInt'

const BOUNDARY = Math.pow(2, 8) / 2

/**
 * Checks if a value is an integer number from -128 adn 127.
 */
export const isInt8 = (value: unknown): value is number =>
  isInt(value) && value >= -BOUNDARY && value < BOUNDARY
