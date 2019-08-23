import { Predicate, Serializable } from '../types'
import { or } from '../generics/or'
import { isSerializablePrimitive } from './isSerializablePrimitive'
import { isSerializableArray } from './isSerializableArray'
import { isSerializableObject } from './isSerializableObject'

export const isSerializable: Predicate<Serializable> = or(
  isSerializablePrimitive,
  isSerializableArray,
  isSerializableObject,
)
