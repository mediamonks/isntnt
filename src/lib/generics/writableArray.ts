import { Predicate, PredicateType } from '../types'
import { isWritableArray } from '../predicates/isWritableArray'

export const writableArray =
  <T>(predicate: Predicate<T>): Predicate<Array<T>> =>
  <U>(value: U): value is PredicateType<Array<T>, U> =>
    isWritableArray(value) && value.every((element) => predicate(element))
