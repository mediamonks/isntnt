import { literal } from '../generics/literal'
import { Predicate } from '../types'

export const isFalse: Predicate<false> = literal(false)
