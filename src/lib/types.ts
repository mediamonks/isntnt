type ObjectWith<K extends PropertyKey> = { [P in K]: unknown }

export type Predicate<T> = (
  value: unknown,
  ...rest: Array<unknown>
) => value is T
export type Static<T extends Predicate<any>> = T extends Predicate<infer R>
  ? R
  : never

export type Constructor<T> = {
  new (...rest: Array<any>): T
}

// see https://stackoverflow.com/a/50375286
export type Intersect<T> = (T extends any ? (k: T) => void : never) extends ((
  k: infer I,
) => void)
  ? I
  : never

export type None = null | undefined
export type Some =
  | Function
  | boolean
  | bigint
  | number
  | string
  | symbol
  | object

export type ObjectLike = ObjectWith<PropertyKey>

export type Primitive =
  | null
  | undefined
  | boolean
  | number
  | string
  | symbol
  | bigint

export interface SerializableArray<T extends Serializable> extends Array<T> {}
export type SerializablePrimitive = null | boolean | number | string
export type SerializableObject = { [key: string]: Serializable }
export type Serializable =
  | SerializablePrimitive
  | SerializableObject
  | SerializableArray<any>
