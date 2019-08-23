import { Predicate } from '../types'
import { object } from '../generics/object'
import { isString } from './isString'

export const isDictionary: Predicate<Record<any, string>> = object(isString)
