import { and } from './and'
import { isObjectLike } from '../predicates/isObjectLike'
import { PlainObject, Predicate, PredicateType } from '../types'

export const has = <T extends PropertyKey>(key: T): Predicate<Record<T, unknown>> =>
  and(isObjectLike as Predicate<PlainObject>, (value: any): value is any =>
    Object.hasOwnProperty.call(value, key),
  )
