import { object } from '../generics/object'
import { EmptyObject, Predicate } from '../types'
import { isNever } from './isNever'

export const isEmptyObject: Predicate<EmptyObject> = object(isNever)
