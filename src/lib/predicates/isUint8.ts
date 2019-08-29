import { isInt } from './isInt'
import { isPositive } from './isPositive'

const ceiling = Math.pow(2, 8)

export const isUint8 = (value: unknown): value is number =>
  isInt(value) && isPositive(value) && value < ceiling
