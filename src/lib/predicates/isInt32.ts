import { Predicate, PredicateType } from '../types'
import { isInt } from './isInt'

const INT_32_BOUNDARY = Math.pow(2, 32) / 2

export const isInt32: Predicate<number> = <T>(value: T): value is PredicateType<number, T> =>
  isInt(value) && value >= -INT_32_BOUNDARY && value < INT_32_BOUNDARY
