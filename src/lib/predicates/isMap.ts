import { instance } from '../generics/instance'
import { Predicate } from '../types'

export const isMap: Predicate<Map<unknown, unknown>> = instance(Map)
