import { Primitive, Predicate } from '../types'

export const either =
  <T extends ReadonlyArray<Primitive>>(...options: T): Predicate<T[number]> =>
  (value: unknown): value is T[number] => {
    let length = options.length
    let isValid = length === 0
    while (!isValid && length) {
      isValid = value === options[--length]
    }
    return isValid
  }
