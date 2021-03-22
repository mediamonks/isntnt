import { SerializableObject, Predicate } from '../types'
import { isSerializable } from './isSerializable'
import { isPlainObject } from './isPlainObject'

export const isSerializableObject: Predicate<SerializableObject> = <T>(
  value: T,
): value is Extract<T, SerializableObject> => {
  const isObjectValue = isPlainObject(value)
  if (isObjectValue) {
    for (const key in value as any) {
      if (Object.hasOwnProperty.call(value, key)) {
        if (!isSerializable((value as any)[key])) {
          return false
        }
      }
    }
  }
  return isObjectValue
}
