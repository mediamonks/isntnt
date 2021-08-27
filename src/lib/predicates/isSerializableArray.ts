import { Predicate, SerializableArray } from '../types'
import { isArray } from './isArray'
import { isSerializable } from './isSerializable'

/**
 * Checks if a value is a serializable Array.
 */
export const isSerializableArray: Predicate<SerializableArray> = (
  value: unknown,
): value is SerializableArray => isArray(value) && value.every(isSerializable)
