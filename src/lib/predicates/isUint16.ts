import { uint } from '../generics'
import { Predicate } from '../types'

export const isUint16: Predicate<number> = uint(16)
