import { Predicate } from '../types'
import { instance } from '../generics/instance'

export const isMap: Predicate<Map<any, unknown>> = instance(Map)
