import { Predicate, SerializableArray } from '../types'
import { isArray } from './isArray'
import { isSerializable } from './isSerializable'

export const isSerializableArray = ((value) =>
  isArray(value) && value.every(isSerializable)) as Predicate<SerializableArray>
