import { Predicate } from '../types'
import { isInt } from './isInt'

const INT_32_BOUNDARY = Math.pow(2, 32) / 2

export const isInt32: Predicate<number> = <T>(value: T): value is Extract<T, number> =>
  isInt(value) && value >= -INT_32_BOUNDARY && value < INT_32_BOUNDARY
