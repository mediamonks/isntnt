import { Predicate, Some } from '../types'
import { and } from '../generics/and'
import { isSome } from './isSome'

export const isObject: Predicate<object> = and(
  isSome,
  (value: unknown): value is object => typeof value === 'object',
)
