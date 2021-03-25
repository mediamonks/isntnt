import { instance } from '../generics/instance'
import { Predicate } from '../types'

export const isWeakMap: Predicate<WeakMap<any, unknown>> = instance(WeakMap)
