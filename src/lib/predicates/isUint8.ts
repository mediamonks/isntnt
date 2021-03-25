import { Predicate } from '../types'
import { isInt } from './isInt'
import { isPositive } from './isPositive'

const UINT_8_CEILING = Math.pow(2, 8)

export const isUint8: Predicate<number> = <T>(value: T): value is Extract<T, number> =>
  isInt(value) && isPositive(value) && value < UINT_8_CEILING
