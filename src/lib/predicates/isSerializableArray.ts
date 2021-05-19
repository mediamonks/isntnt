import { Predicate, PredicateType, SerializableArray } from '../types'
import { isArray } from './isArray'
import { isSerializable } from './isSerializable'

export const isSerializableArray: Predicate<SerializableArray> = <U>(
  value: U,
): value is PredicateType<SerializableArray, U> =>
  isArray(value) && value.every((element) => isSerializable(element))
