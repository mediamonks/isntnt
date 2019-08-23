import { Predicate } from '../../index'
import { instance } from '../generics/instance'

export const isArray: Predicate<Array<unknown>> =
  Array.isArray || instance(Array)
