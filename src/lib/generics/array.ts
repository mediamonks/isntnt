import { Predicate, Static } from '../types'
import { isArray } from '../predicates/isArray'

export const array =
  <T extends Predicate<any>>(predicate: T): Predicate<Array<Static<T>>> =>
  (value: unknown): value is Array<Static<T>> => {
    let isValid = isArray(value)
    let index = 0
    while (isValid && index < (value as Array<unknown>).length) {
      const element = (value as Array<unknown>)[index++]
      isValid = predicate(element)
    }

    return isValid
  }
