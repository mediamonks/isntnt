import { Predicate } from '../types'
import { instance } from '../generics/instance'

export const isRegExp: Predicate<RegExp> = instance(RegExp)
