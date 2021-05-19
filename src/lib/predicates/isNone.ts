import { None, Predicate, PredicateType } from '../types'
import { isSome } from './isSome'

export const isNone: Predicate<None> = <T>(value: T): value is PredicateType<None, T> =>
  !isSome(value)
