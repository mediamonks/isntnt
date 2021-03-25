import { instance } from '../generics/instance'
import { Predicate } from '../types'

export const isSet: Predicate<Set<unknown>> = instance(Set)
