import { Primitive, Predicate, PredicateType } from '../types'

export const literal =
  <T extends Primitive>(input: T): Predicate<T> =>
  <U>(value: U): value is PredicateType<T, U> =>
    input === (value as any)
