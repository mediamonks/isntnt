import { at } from '../generics/at'
import { isLength } from './isLength'

/**
 * Checks if a value has a length property that is a Uint32.
 */
export const isWithLength = at('length', isLength)
