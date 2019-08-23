import { Predicate } from '../types'
import { at } from '../generics/at'
import { isLength } from './isLength'

export const isWithLength: Predicate<{ length: number }> = at(
  'length',
  isLength,
)
