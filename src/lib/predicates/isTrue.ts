import { Predicate } from '../types'
import { literal } from '../generics/literal'

/**
 * Checks if a value is `true`.
 */
export const isTrue: Predicate<true> = literal(true)
