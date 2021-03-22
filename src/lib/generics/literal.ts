import { Primitive, Predicate } from '../types'

export const literal = <T extends Primitive>(input: T) =>
  ((value: any) => input === value) as Predicate<T>
