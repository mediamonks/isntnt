import { object } from '../generics/object'
import { isString } from './isString'

export const isDictionary = object(isString)
