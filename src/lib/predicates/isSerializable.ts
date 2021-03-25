import { Predicate, Serializable } from '../types'
import { isSerializableArray } from './isSerializableArray'
import { isSerializableObject } from './isSerializableObject'
import { isSerializablePrimitive } from './isSerializablePrimitive'

export const isSerializable: Predicate<Serializable> = <T>(
  value: T,
): value is Extract<T, Serializable> =>
  isSerializableArray(value) || isSerializableObject(value) || isSerializablePrimitive(value)
