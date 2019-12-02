import { Predicate, Static } from '../types'
import { isObject } from '../predicates/isObject'
import { at } from './at'

export const shape = <T extends Record<PropertyKey, Predicate<any>>>(
  shape: T,
) => {
  const predicates = Object.keys(shape).map((key) => at(key, shape[key]))
  return (value: unknown): value is { [K in keyof T]: Static<T[K]> } => {
    const isObjectValue = isObject(value)
    if (isObjectValue) {
      for (let i = 0; i < predicates.length; ++i) {
        if (!predicates[i](value)) {
          return false
        }
      }
    }
    return isObjectValue
  }
}
