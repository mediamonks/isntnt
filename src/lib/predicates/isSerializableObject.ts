import { SerializableObject, Predicate } from '../types'
import { isSomething } from './isSomething'
import { isString } from './isString'
import { isSerializablePrimitive } from './isSerializablePrimitive'
import { isSerializableArray } from './isSerializableArray'

export const isSerializableObject: Predicate<SerializableObject> = (
  value: any,
): value is SerializableObject =>
  isSomething(value) &&
  Object.keys(value).every((key) => {
    const property = (value as any)[key]
    return (
      isString(key) &&
      (isSerializablePrimitive(property) ||
        isSerializableArray(property) ||
        isSerializableObject(property))
    )
  })
