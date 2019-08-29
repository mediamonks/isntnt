import { Predicate, Some } from '../types'

export const isSome: Predicate<Some> = (value: any): value is Some =>
  value != null && value === value
