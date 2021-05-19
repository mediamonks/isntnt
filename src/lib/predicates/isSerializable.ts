import { Predicate, PredicateType, Serializable } from '../types'
import { isSerializableArray } from './isSerializableArray'
import { isSerializableObject } from './isSerializableObject'
import { isSerializablePrimitive } from './isSerializablePrimitive'

export const isSerializable: Predicate<Serializable> = <T>(
  value: T,
): value is PredicateType<Serializable, T> =>
  isSerializableArray(value) || isSerializableObject(value) || isSerializablePrimitive(value)
