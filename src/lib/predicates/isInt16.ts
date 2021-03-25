import { Predicate } from '../types'
import { isInt } from './isInt'

const INT_16_BOUNDARY = Math.pow(2, 16) / 2

export const isInt16: Predicate<number> = <T>(value: T): value is Extract<T, number> =>
  isInt(value) && value >= -INT_16_BOUNDARY && value < INT_16_BOUNDARY
