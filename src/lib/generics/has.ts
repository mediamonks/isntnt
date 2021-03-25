import { and } from './and'
import { isObjectLike } from '../predicates/isObjectLike'
import { Predicate } from '../types'

export const has = <K extends PropertyKey>(key: K) =>
  and(isObjectLike, (value: any): value is any =>
    Object.hasOwnProperty.call(value, key),
  ) as Predicate<Record<K, unknown>>
