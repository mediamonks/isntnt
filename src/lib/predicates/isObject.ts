import { and } from '../generics/and'
import { Predicate } from '../types'
import { isSome } from './isSome'

export const isObject = and(
  isSome,
  (value: unknown): value is any => typeof value === 'object',
) as Predicate<object>
