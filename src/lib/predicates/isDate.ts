import { Predicate } from '../types'
import { instance } from '../generics/instance'

export const isDate: Predicate<Date> = instance(Date)
