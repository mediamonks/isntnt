import { isNumber } from './isNumber'

export const isSerializableNumber = (value: unknown): value is number =>
  isNumber(value) && Math.abs(value) !== Infinity
