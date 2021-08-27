import { Predicate } from '../types'
import { literal } from '../generics/literal'

/**
 * Checks if a value is `null`.
 */
export const isNull: Predicate<null> = literal(null)
