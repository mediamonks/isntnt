import { Predicate, Intersect, Static } from '../types'
import { and } from './and'

export const legacyAnd = <T extends ReadonlyArray<Predicate<any>>>(
  ...predicates: T
): Predicate<Intersect<Static<T[number]>>> => and(...(predicates as any))
