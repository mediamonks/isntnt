import { Predicate, Static } from '../types'
import { isObjectLike } from '../predicates/isObjectLike'

export const at = <K extends PropertyKey, T extends Predicate<any>>(key: K, predicate: T) => <I>(
  value: I,
): value is I &
  (Extract<Static<T>, undefined> extends never
    ? { [P in K]: Static<T> }
    : { [P in K]?: Static<T> }) => isObjectLike(value) && predicate(value[key])
