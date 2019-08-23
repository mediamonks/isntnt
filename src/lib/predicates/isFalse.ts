import { Predicate } from '../types'
import { literal } from '../generics/literal'

export const isFalse: Predicate<false> = literal(false)
