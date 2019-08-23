import { SerializableArray, Predicate } from '../types'
import { isArray } from './isArray'
import { isSerializable } from './isSerializable'

export const isSerializableArray: Predicate<SerializableArray> = (
  value: any,
): value is SerializableArray => isArray(value) && value.every(isSerializable)
