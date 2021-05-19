import { Predicate, PredicateType } from '../types'
import { isNumber } from './isNumber'

export const isSerializableNumber: Predicate<number> = <T>(
  value: T,
): value is PredicateType<number, T> => isNumber(value) && Math.abs(value) !== Infinity
