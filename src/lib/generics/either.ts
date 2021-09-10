import { Primitive, Predicate } from '../types'

export const either =
  <T extends ReadonlyArray<Primitive>>(...options: T): Predicate<T[number]> =>
  (value: unknown): value is T[number] =>
    options.some((item) => item === value)
