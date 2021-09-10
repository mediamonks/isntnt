import { Maybe, Predicate } from '../types'
import { isNone } from '../predicates/isNone'

export const maybe =
  <T>(predicate: Predicate<T>): Predicate<Maybe<T>> =>
  (value: unknown): value is Maybe<T> =>
    isNone(value) || predicate(value)
