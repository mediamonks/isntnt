import { Predicate } from '../types'
import { isInt } from './isInt'
import { isPositive } from './isPositive'

export const isUint: Predicate<number> = (value: unknown): value is number =>
  isInt(value) && isPositive(value) && value !== Infinity
