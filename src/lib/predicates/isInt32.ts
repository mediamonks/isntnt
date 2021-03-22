import { Predicate } from '../types'
import { isInt } from './isInt'

const boundary = Math.pow(2, 32) / 2

export const isInt32 = ((value: unknown) =>
  isInt(value) && value >= -boundary && value < boundary) as Predicate<number>
