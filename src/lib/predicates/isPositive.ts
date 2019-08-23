import { Predicate } from '../types'

export const isPositive: Predicate<number> = (value: any): value is number =>
  typeof value === 'number' && Infinity / (0 / value) > 0
