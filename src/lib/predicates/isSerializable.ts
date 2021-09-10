import { Predicate, Serializable } from '../types'
import { isSerializableArray } from './isSerializableArray'
import { isSerializableObject } from './isSerializableObject'
import { isSerializablePrimitive } from './isSerializablePrimitive'

export const isSerializable: Predicate<Serializable> = (value: unknown): value is Serializable =>
  isSerializablePrimitive(value) || isSerializableObject(value) || isSerializableArray(value)
