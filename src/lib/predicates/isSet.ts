import { Predicate } from '../types'
import { instance } from '../generics/instance'

export const isSet: Predicate<Set<unknown>> = instance(Set)
