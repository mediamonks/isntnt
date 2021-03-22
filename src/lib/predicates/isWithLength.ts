import { at } from '../generics/at'
import { isLength } from './isLength'

export const hasLength = at('length', isLength)
