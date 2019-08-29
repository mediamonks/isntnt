import { Predicate } from '../types'
import { and } from '../generics/and'
import { isSome } from './isSome'

export const isObject: Predicate<object> = and(
  isSome,
  (value: any): value is object => typeof value === 'object',
)
