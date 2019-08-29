import { Predicate } from '../types'

export const isNumber: Predicate<number> = (value: unknown): value is number =>
  typeof value === 'number' && value === value
