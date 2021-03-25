import { instance } from '../generics/instance'
import { Predicate } from '../types'

export const isRegExp: Predicate<RegExp> = instance(RegExp)
