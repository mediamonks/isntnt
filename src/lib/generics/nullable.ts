import { Nullable, Predicate } from '../types'
import { isNull } from '../predicates/isNull'

export const nullable =
  <T>(predicate: Predicate<T>): Predicate<T | null> =>
  (value: unknown): value is Nullable<T> =>
    isNull(value) || predicate(value)
