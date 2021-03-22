import { Serializable } from '../types'
import { or } from '../generics/or'
import { isSerializableArray } from './isSerializableArray'
import { isSerializableObject } from './isSerializableObject'
import { isSerializablePrimitive } from './isSerializablePrimitive'

export const isSerializable = or(
  isSerializableArray,
  isSerializableObject,
  isSerializablePrimitive,
) as <U>(value: U) => value is Extract<U, Serializable>
