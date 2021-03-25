import { and } from '../generics/and'
import { Predicate } from '../types'
import { isSome } from './isSome'

export const isObject: Predicate<object> = and(
  isSome,
  <T>(value: T): value is Extract<T, object> => typeof value === 'object',
)
