import { Predicate } from '../types'

export const isNegative = ((value) =>
  typeof value === 'number' && (value === 0 ? Infinity / value : value) < 0) as Predicate<number>
