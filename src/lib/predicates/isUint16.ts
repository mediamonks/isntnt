import { Predicate, PredicateType } from '../types'
import { isInt } from './isInt'
import { isPositive } from './isPositive'

const UINT_16_CEILING = Math.pow(2, 16)

export const isUint16: Predicate<number> = <T>(value: T): value is PredicateType<number, T> =>
  isInt(value) && isPositive(value) && value < UINT_16_CEILING
