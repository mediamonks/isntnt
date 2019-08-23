import { isInt } from './isInt'

const boundary = Math.pow(2, 32) / 2

export const isInt32 = (value: any): value is number =>
  isInt(value) && value >= -boundary && value < boundary
