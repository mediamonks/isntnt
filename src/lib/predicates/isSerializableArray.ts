import { Predicate, SerializableArray } from '../types'
import { isArray } from './isArray'
import { isSerializable } from './isSerializable'

/**
 * Checks if a value is a serializable Array.
 */
export const isSerializableArray: Predicate<SerializableArray> = (
  value: unknown,
): value is SerializableArray => {
  let isValid = isArray(value)
  let index = 0
  while (isValid && index < (value as Array<unknown>).length) {
    const element = (value as Array<unknown>)[index++]
    isValid = isSerializable(element)
  }

  return isValid
}
