import { Predicate } from '../types'

export const isInt: Predicate<number> = (value: unknown): value is number =>
  typeof value === 'number' && value === Math.floor(value)
