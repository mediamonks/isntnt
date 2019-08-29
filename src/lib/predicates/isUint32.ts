import { isInt } from './isInt'
import { isPositive } from './isPositive'

const ceiling = Math.pow(2, 32)

export const isUint32 = (value: unknown): value is number =>
  isInt(value) && isPositive(value) && value < ceiling
