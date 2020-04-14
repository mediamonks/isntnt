import { Predicate, SerializableArray } from '../types'
import { isArray } from './isArray'
import { isSerializable } from './isSerializable'

export const isSerializableArray: Predicate<SerializableArray> = (
  value: unknown,
): value is SerializableArray => isArray(value) && value.every(isSerializable)
