import { Predicate } from '../types'
import { instance } from '../generics/instance'

const isDateObject: Predicate<Date> = instance(Date)

const INVALID_DATE_STRING = String(new Date(NaN))

/**
 * Checks if a value is a valid Date object.
 */
export const isDate: Predicate<Date> = (value): value is Date =>
  isDateObject(value) && String(value) !== INVALID_DATE_STRING