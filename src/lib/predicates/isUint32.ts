import { uint } from '../generics'
import { Predicate } from '../types'

export const isUint32: Predicate<number> = uint(32)
