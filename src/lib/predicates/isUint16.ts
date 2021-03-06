import { isInt } from './isInt'
import { isPositive } from './isPositive'

const ceiling = Math.pow(2, 16)

export const isUint16 = (value: unknown): value is number =>
  isInt(value) && isPositive(value) && value < ceiling
