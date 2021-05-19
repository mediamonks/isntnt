import { and } from '../generics/and'
import { Predicate, PredicateType } from '../types'
import { isSome } from './isSome'

export const isObject: Predicate<object> = and(
  isSome,
  <T>(value: T): value is PredicateType<object, T> => typeof value === 'object',
)
