import { Predicate, PredicateType } from '../types'
import { isInt } from './isInt'
import { isPositive } from './isPositive'

export const isUint: Predicate<number> = <T>(value: T): value is PredicateType<number, T> =>
  isInt(value) && isPositive(value) && value !== Infinity
