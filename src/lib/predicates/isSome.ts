import { Predicate, Some } from '../types'

export const isSome: Predicate<Some> = <T>(value: T): value is Extract<T, Some> =>
  value != null && value === value
