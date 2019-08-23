import { Predicate } from '../types'
import { literal } from '../generics/literal'

export const isNull: Predicate<null> = literal(null)
