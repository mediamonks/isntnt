import { Predicate, PredicateType } from '../types'
import { isInt } from './isInt'

const INT_8_BOUNDARY = Math.pow(2, 8) / 2

export const isInt8: Predicate<number> = <T>(value: T): value is PredicateType<number, T> =>
  isInt(value) && value >= -INT_8_BOUNDARY && value < INT_8_BOUNDARY
