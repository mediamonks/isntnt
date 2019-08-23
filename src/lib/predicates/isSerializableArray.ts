import { SerializableArray, Predicate } from '../types'
import { isSerializable } from './isSerializable'
import { array } from '../generics/array'

export const isSerializableArray: Predicate<SerializableArray> = array(
  isSerializable,
)
