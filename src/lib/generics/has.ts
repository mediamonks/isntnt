import { Predicate } from '../types'
import { isObjectLike } from '../predicates/isObjectLike'

export const has = <K extends PropertyKey>(key: K): Predicate<Record<K, unknown>> => 
  (value: unknown): value is Record<K, unknown> =>
    isObjectLike(value) && Object.hasOwnProperty.call(value, key)