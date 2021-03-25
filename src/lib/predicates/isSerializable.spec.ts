import { isSerializable } from '../predicates/isSerializable'

describe('isSerializable', () => {
  it('is a function', () => {
    expect(isSerializable).toBeInstanceOf(Function)
  })
})
