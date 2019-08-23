import { isNumber } from './isNumber'

export const isSerializableNumber = (value: any): value is number =>
  isNumber(value) && Math.abs(value) !== Infinity
