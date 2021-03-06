import { Predicate, Serializable } from '../types'
import { or } from '../generics/or'
import { isSerializableArray } from './isSerializableArray'
import { isSerializableObject } from './isSerializableObject'
import { isSerializablePrimitive } from './isSerializablePrimitive'

export const isSerializable: Predicate<Serializable> = or(
  isSerializableArray,
  isSerializableObject,
  isSerializablePrimitive,
)
