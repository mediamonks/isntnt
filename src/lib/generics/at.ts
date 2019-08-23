import { Predicate, Static } from '../types'

export const at = <K extends PropertyKey, T extends Predicate<any>>(
  key: K,
  predicate: T,
) => (value: any): value is { [P in K]: Static<T> } =>
  value != null && predicate(value[key])
