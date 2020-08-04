import { ObjectLike } from '../types'
import { isBoolean } from './isBoolean'
import { isSome } from './isSome'

export const isObjectLike = (value: unknown): value is ObjectLike =>
  isSome(value) && !isBoolean(value)
