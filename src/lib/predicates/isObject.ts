import { Predicate } from '../types'
import { and } from '../generics/and'
import { isSomething } from './isSomething'

export const isObject: Predicate<object> = and(
  isSomething,
  (value: any): value is object => typeof value === 'object',
)
