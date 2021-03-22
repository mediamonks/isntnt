import { isInt } from './isInt'
import { isPositive } from './isPositive'
import { Predicate } from '../types'

const ceiling = Math.pow(2, 32)

export const isUint32 = ((value) =>
  isInt(value) && isPositive(value) && value < ceiling) as Predicate<number>
