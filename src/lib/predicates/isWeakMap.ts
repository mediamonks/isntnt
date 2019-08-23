import { Predicate } from '../types'
import { instance } from '../generics/instance'

export const isWeakMap: Predicate<WeakMap<any, unknown>> = instance(WeakMap)
