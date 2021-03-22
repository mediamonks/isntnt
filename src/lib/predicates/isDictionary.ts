import { object } from '../generics/object'
import { isString } from './isString'

export type Dictionary = Record<any, string>

export const isDictionary = object(isString) as <T>(value: T) => value is Extract<T, Dictionary>
