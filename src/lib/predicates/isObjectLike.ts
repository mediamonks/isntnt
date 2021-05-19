import { None, PredicateType } from '../types'
import { isBoolean } from './isBoolean'
import { isSome } from './isSome'

export const isObjectLike = <T>(value: T): value is PredicateType<Exclude<T, None | boolean>, T> =>
  isSome(value) && !isBoolean(value)
