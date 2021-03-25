import { isInt } from './isInt'
import { isPositive } from './isPositive'
import { Predicate } from '../types'

const UINT_32_CEILING = Math.pow(2, 32)

export const isUint32: Predicate<number> = <T>(value: T): value is Extract<T, number> =>
  isInt(value) && isPositive(value) && value < UINT_32_CEILING
