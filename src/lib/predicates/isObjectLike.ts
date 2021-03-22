import { None } from '../types'
import { isBoolean } from './isBoolean'
import { isSome } from './isSome'

export const isObjectLike = <T>(value: T): value is Exclude<T, None | boolean> =>
  isSome(value) && !isBoolean(value)
