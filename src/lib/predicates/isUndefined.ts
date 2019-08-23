import { Predicate } from '../types'
import { literal } from '../generics/literal'

export const isUndefined: Predicate<undefined> = literal(undefined)
