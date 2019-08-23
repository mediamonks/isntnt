import { Predicate } from '../types'
import { isInt } from './isInt'
import { isPositive } from './isPositive'

export const isUint: Predicate<number> = (value: any): value is number =>
  isInt(value) && isPositive(value)
