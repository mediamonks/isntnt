import { SerializableObject, Predicate } from '../types'
import { isSerializable } from './isSerializable'
import { isPlainObject } from './isPlainObject'

export const isSerializableObject: Predicate<SerializableObject> = (
  value: unknown,
): value is SerializableObject => {
  const isObjectValue = isPlainObject(value)
  if (isObjectValue) {
    for (const key in value as SerializableObject) {
      if (Object.hasOwnProperty.call(value, key)) {
        if (!isSerializable((value as SerializableObject)[key])) {
          return false
        }
      }
    }
  }
  return isObjectValue
}
