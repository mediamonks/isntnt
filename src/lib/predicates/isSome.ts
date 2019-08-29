import { Predicate, Some } from '../types'

export const isSome: Predicate<Some> = (value: unknown): value is Some =>
  value != null && value === value
