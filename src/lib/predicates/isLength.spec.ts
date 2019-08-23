import { isLength } from './isLength'
import { isUint32 } from './isUint32'

describe('isLength', () => {
  test('is a function', () => {
    expect(isLength).toBe(isUint32)
  })
})
