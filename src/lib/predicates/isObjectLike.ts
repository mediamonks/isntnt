import type { UnknownObject } from '../types'
import { isBoolean } from './isBoolean'
import { isSome } from './isSome'

/**
 * Checks if a value has object-like properties (not `null`, `undefined`, or a boolean).
 */
export const isObjectLike = (value: unknown): value is UnknownObject =>
  isSome(value) && !isBoolean(value)
