import { Predicate } from '../types'

export const isReadonlyArray = Array.isArray as Predicate<ReadonlyArray<any>>
