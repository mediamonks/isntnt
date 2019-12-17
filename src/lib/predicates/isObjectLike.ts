import { Predicate, ObjectLike } from '../types'
import { isBoolean } from './isBoolean'
import { isSome } from './isSome'

export const isObjectLike: Predicate<ObjectLike> = (value: unknown): value is ObjectLike =>
  isSome(value) && !isBoolean(value)
