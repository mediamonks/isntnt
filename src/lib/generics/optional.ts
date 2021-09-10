import { Predicate } from '../types'
import { isUndefined } from '../predicates/isUndefined'

export const optional =
  <T>(predicate: Predicate<T>): Predicate<T | undefined> =>
  (value: unknown): value is T | undefined =>
    isUndefined(value) || predicate(value)
