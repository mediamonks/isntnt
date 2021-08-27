import { Predicate } from '../types'
import { isNumber } from './isNumber'
import { isString } from './isString'

export type NumericString =  `${number}`

/**
 * Checks if a value is a numeric string.
 */
export const isNumericString: Predicate<NumericString> = (value: unknown): value is NumericString => 
  isString(value) && isNumber(Number(value))