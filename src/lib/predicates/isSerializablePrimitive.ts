import { Predicate, SerializablePrimitive } from '../types'
import { isBoolean } from './isBoolean'
import { isNull } from './isNull'
import { isSerializableNumber } from './isSerializableNumber'
import { isString } from './isString'

/**
 * Checks if a value is a serializable primitive.
 */
export const isSerializablePrimitive: Predicate<SerializablePrimitive> = (
  value: unknown,
): value is SerializablePrimitive =>
  isNull(value) || isString(value) || isSerializableNumber(value) || isBoolean(value)
