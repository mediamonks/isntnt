export type Predicate<T> = (value: any, ...rest: Array<unknown>) => value is T
export type Static<T extends Predicate<any>> = T extends Predicate<infer R>
  ? R
  : never

export type ObjectWith<K extends PropertyKey> = { [P in K]: unknown }

export type Constructor<T> = {
  new (...rest: Array<any>): T
}

// see https://stackoverflow.com/a/50375286
export type Intersect<T> = (T extends any ? (k: T) => void : never) extends ((
  k: infer I,
) => void)
  ? I
  : never

export type Nothing = null | undefined
export type Something =
  | Function
  | boolean
  | bigint
  | number
  | string
  | symbol
  | object
  | {}

export type ObjectLike = ObjectWith<PropertyKey>

export type Primitive =
  | null
  | undefined
  | boolean
  | number
  | string
  | symbol
  | bigint

export type SerializablePrimitive = null | boolean | number | string
export type SerializableObject = { [key: string]: Serializable }
export type SerializableArray = { [key: number]: Serializable }
export type Serializable =
  | SerializablePrimitive
  | SerializableObject
  | SerializableArray
