import { Predicate, PredicateType } from '../types'
import { isArray } from '../predicates/isArray'

export const array =
  <T>(predicate: Predicate<T>): Predicate<Array<T>> =>
  <U>(value: U): value is PredicateType<Array<T>, U> =>
    isArray(value) && value.every((element) => predicate(element))
