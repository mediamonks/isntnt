import { Predicate } from '../types'

export const isNumber: Predicate<number> = (value: any): value is number =>
  typeof value === 'number' && value === value
