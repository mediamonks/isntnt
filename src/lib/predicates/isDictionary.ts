import { object } from '../generics/object'
import { Dictionary, Predicate } from '../types'
import { isString } from './isString'

export const isDictionary: Predicate<Dictionary> = object(isString)
