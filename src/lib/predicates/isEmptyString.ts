import { literal } from '../generics/literal'
import { EmptyString, Predicate } from '../types'

export const isEmptyString: Predicate<EmptyString> = literal('')
