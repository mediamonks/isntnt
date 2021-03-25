import { Primitive, Predicate } from '../types'

export const literal = <T extends Primitive>(input: T): Predicate<T> => <U>(
  value: U,
): value is Extract<U, T> => input === (value as any)
