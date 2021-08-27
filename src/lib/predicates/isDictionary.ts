import { record } from '../generics/record'
import { Dictionary, Predicate } from '../types'
import { isString } from './isString'

/**
 * Checks if a value is a dictionary object.
 */
export const isDictionary: Predicate<Dictionary> = record(isString, isString)
