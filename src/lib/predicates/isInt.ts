import { Predicate } from '../types'

export const isInt: Predicate<number> = (value: any): value is number =>
  value === Math.floor(value)
