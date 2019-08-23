import { uint } from '../generics'
import { Predicate } from '../types'

export const isUint8: Predicate<number> = uint(8)
