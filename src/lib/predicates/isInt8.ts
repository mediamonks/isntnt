import { isInt } from './isInt'

const boundary = Math.pow(2, 8) / 2

export const isInt8 = (value: unknown): value is number =>
  isInt(value) && value >= -boundary && value < boundary
