import { Predicate } from '../types'
import { isArray } from '../predicates/isArray'

export const array = <T>(predicate: Predicate<T>): Predicate<Array<T> | ReadonlyArray<T>> => <U>(
  value: U,
): value is Extract<U, Array<T> | ReadonlyArray<T>> =>
  isArray(value) && value.every((element) => predicate(element))
