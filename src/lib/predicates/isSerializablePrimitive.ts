import { Predicate, PredicateType, SerializablePrimitive } from '../types'
import { isBoolean } from './isBoolean'
import { isNull } from './isNull'
import { isSerializableNumber } from './isSerializableNumber'
import { isString } from './isString'

export const isSerializablePrimitive: Predicate<SerializablePrimitive> = <T>(
  value: T,
): value is PredicateType<SerializablePrimitive, T> =>
  isNull(value) || isString(value) || isSerializableNumber(value) || isBoolean(value)
