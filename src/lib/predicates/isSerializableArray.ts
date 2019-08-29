import { Predicate, Serializable } from '../types'
import { isSerializable } from './isSerializable'
import { array } from '../generics/array'

export const isSerializableArray: Predicate<Array<Serializable>> = array(
  isSerializable,
)
