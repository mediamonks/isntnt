import { isInt } from './isInt'

const boundary = Math.pow(2, 16) / 2

export const isInt16 = (value: unknown): value is number =>
  isInt(value) && value >= -boundary && value < boundary
