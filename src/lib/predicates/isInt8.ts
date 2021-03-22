import { Predicate } from '../types'
import { isInt } from './isInt'

const boundary = Math.pow(2, 8) / 2

export const isInt8 = ((value: unknown) =>
  isInt(value) && value >= -boundary && value < boundary) as Predicate<number>
