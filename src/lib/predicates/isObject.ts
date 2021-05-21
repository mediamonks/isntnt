import { and } from '../generics/and'
import { Predicate, PredicateType } from '../types'
import { isSome } from './isSome'

export const isObject: Predicate<object> = and(
  isSome,
  <T>(value: T): value is PredicateType<any, T> => typeof value === 'object',
)
