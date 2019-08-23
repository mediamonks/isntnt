import { Predicate, ObjectLike } from '../types'
import { isBoolean } from './isBoolean'

export const isObjectLike: Predicate<ObjectLike> = (
  value: any,
): value is ObjectLike => value != null && !isBoolean(value)
