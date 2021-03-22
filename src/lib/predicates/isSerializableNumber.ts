import { Predicate } from '../types'
import { isNumber } from './isNumber'

export const isSerializableNumber = ((value) =>
  isNumber(value) && Math.abs(value) !== Infinity) as Predicate<number>
