import { literal } from '../generics/literal'
import { Predicate } from '../types'

export const isNull: Predicate<null> = literal(null)
