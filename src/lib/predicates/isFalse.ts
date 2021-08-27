import { Predicate } from '../types'
import { literal } from '../generics/literal'

/**
 * Checks if a value is `false`.
 */
export const isFalse: Predicate<false> = literal(false)
