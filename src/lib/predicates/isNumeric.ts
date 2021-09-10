import { Predicate } from '../types'
import { isNumber } from './isNumber'
import { isNumericString, NumericString } from './isNumericString'

export type Numeric = number | NumericString

/**
 * Checks if a value is numeric; a valid number or numeric string.
 */
export const isNumeric: Predicate<Numeric> = (value: unknown): value is Numeric =>
  isNumber(value) || isNumericString(value)
