import { Predicate, Primitive } from '../types'

export const literal = <T extends Primitive>(input: T): Predicate<T> => (value: unknown): value is T =>
  input === value
