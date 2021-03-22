import { Predicate } from '../types'
import { isInt } from './isInt'

const boundary = Math.pow(2, 16) / 2

export const isInt16 = ((value: unknown) =>
  isInt(value) && value >= -boundary && value < boundary) as Predicate<number>
