import { EmptyObject, Predicate } from '../types'
import { isObject } from './isObject'

export const isEmptyObject: Predicate<EmptyObject> = <U>(
  value: U,
): value is Extract<U, EmptyObject> => {
  const valueIsObject = isObject(value)
  if (valueIsObject) {
    for (const key in value) {
      if (Object.hasOwnProperty.call(value, key)) {
        return false
      }
    }
  }

  return valueIsObject
}
