import { Predicate, PredicateType } from '../types'
import { isDate } from './isDate'

const INVALID_DATE_STRING = String(new Date(NaN))

export const isValidDate: Predicate<Date> = <T>(value: T): value is PredicateType<Date, T> =>
  isDate(value) && String(value.toDateString) !== INVALID_DATE_STRING
