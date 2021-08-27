import { Predicate } from '../types'
import { and } from '../generics/and'
import { isSome } from './isSome'

/**
 * Checks if a value is an object.
 */
export const isObject: Predicate<object> = and(
  isSome,
  (value: unknown): value is object => typeof value === 'object',
)
