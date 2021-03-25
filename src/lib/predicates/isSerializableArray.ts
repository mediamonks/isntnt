import { Predicate, SerializableArray } from '../types'
import { isArray } from './isArray'
import { isSerializable } from './isSerializable'

export const isSerializableArray: Predicate<SerializableArray> = <U>(
  value: U,
): value is Extract<U, SerializableArray> =>
  isArray(value) && value.every((element) => isSerializable(element))
