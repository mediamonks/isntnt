import { SerializableObject, Predicate } from '../types'
import { isSerializable } from './isSerializable'
import { isPlainObject } from './isPlainObject'

/**
 * Checks if a value is a serializable object.
 */
export const isSerializableObject: Predicate<SerializableObject> = (
  value: unknown,
): value is SerializableObject => {
  let isValid = isPlainObject(value)
  if (isValid) {
    for (const key in value as SerializableObject) {
      if (Object.hasOwnProperty.call(value, key)) {
        isValid = isSerializable((value as SerializableObject)[key])
        if (!isValid) {
          break
        }
      }
    }
  }
  return isValid
}
