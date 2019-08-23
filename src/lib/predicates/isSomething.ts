import { Predicate, Something } from '../types'

export const isSomething: Predicate<Something> = (
  value: any,
): value is Something => value != null && value === value
