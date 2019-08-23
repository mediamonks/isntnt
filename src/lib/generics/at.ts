import { Predicate, Static } from '../types'
import { isObjectLike } from '../predicates/isObjectLike'

export const at = <K extends PropertyKey, T extends Predicate<any>>(
  key: K,
  predicate: T,
) => (value: any): value is { [P in K]: Static<T> } =>
  isObjectLike(value) && predicate(value[key])
