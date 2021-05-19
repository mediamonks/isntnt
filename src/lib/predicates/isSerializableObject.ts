import { SerializableObject, Predicate, PredicateType } from '../types'
import { isSerializable } from './isSerializable'
import { isPlainObject } from './isPlainObject'

export const isSerializableObject: Predicate<SerializableObject> = <T>(
  value: T,
): value is PredicateType<SerializableObject, T> => {
  const valueIsPlainObject = isPlainObject(value)
  if (valueIsPlainObject) {
    for (const key in value) {
      if (Object.hasOwnProperty.call(value, key) && !isSerializable(value[key])) {
        return false
      }
    }
  }

  return valueIsPlainObject
}
