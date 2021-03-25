import { Predicate } from '../types'
import { isNumber } from './isNumber'

export const isSerializableNumber: Predicate<number> = <T>(value: T): value is Extract<T, number> =>
  isNumber(value) && Math.abs(value) !== Infinity
