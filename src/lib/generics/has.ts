import { Predicate } from '../types'
import { and } from './and'
import { isObjectLike } from '../predicates/isObjectLike'

export const has = <K extends PropertyKey>(key: K): Predicate<{ [P in K]: unknown }> =>
  and(isObjectLike, (value: any): value is any => Object.hasOwnProperty.call(value, key))
