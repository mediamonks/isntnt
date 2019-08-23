import { Predicate, SerializablePrimitive } from '../types'

export const isSerializablePrimitive: Predicate<SerializablePrimitive> = (
  value: any,
): value is SerializablePrimitive =>
  value === null ||
  (typeof value !== 'object' &&
    typeof value !== 'function' &&
    typeof value !== 'symbol')
