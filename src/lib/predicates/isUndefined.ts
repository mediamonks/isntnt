import { literal } from '../generics/literal'
import { Predicate } from '../types'

export const isUndefined: Predicate<undefined> = literal(undefined)
