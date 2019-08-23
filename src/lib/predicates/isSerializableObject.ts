import { SerializableObject, Predicate } from '../types'
import { isSerializable } from './isSerializable'
import { object } from '../generics/object'

export const isSerializableObject: Predicate<SerializableObject> = object(
  isSerializable,
)
