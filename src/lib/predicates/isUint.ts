import { Predicate } from '../types'
import { isInt } from './isInt'
import { isPositive } from './isPositive'

export const isUint: Predicate<number> = <T>(value: T): value is Extract<T, number> =>
  isInt(value) && isPositive(value) && value !== Infinity
