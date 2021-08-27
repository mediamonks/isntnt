import { Predicate, None } from '../types'
import { isSome } from './isSome'

/**
 * Checks if a value is `null` or `undefined`.
 */
export const isNone: Predicate<None> = (value: unknown): value is None =>
  !isSome(value)
