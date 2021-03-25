import { EmptyArray, Predicate } from '../types'
import { isArray } from './isArray'

export const isEmptyArray: Predicate<EmptyArray> = <U>(value: U): value is Extract<U, EmptyArray> =>
  isArray(value) && value.length === 0
