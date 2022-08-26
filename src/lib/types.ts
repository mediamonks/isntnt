export type Predicate<T> = (value: unknown, ...rest: ReadonlyArray<unknown>) => value is T

export type Static<T extends Predicate<any>> = T extends Predicate<infer R> ? R : never

export type Constructor<
  T extends object,
  U extends ReadonlyArray<unknown> = ReadonlyArray<unknown>,
> = {
  new (...rest: U): T
}

// see https://github.com/Microsoft/TypeScript/issues/29594#issuecomment-507673155
export type Intersect<T> = (T extends any ? (k: T) => void : never) extends (k: infer I) => void
  ? I
  : never

export type None = null | undefined

export type Unknown = Function | Primitive | object

export type Some<T = Unknown> = Exclude<T, None>

export type Maybe<T> = T | None
export type Optional<T> = T | undefined
export type Nullable<T> = T | null

export type PlainObjectKey = string | symbol

export type PlainObject = Record<PlainObjectKey, unknown>

export type UnknownObject = Record<PropertyKey, unknown>

export type EmptyObject = Record<PropertyKey, never>

export type Dictionary = Record<string, string>

export type Primitive = SerializablePrimitive | undefined | symbol | bigint

export type SerializableArray = Array<Serializable> | ReadonlyArray<Serializable>
export type SerializablePrimitive = null | boolean | number | string
export type SerializableObject = { [key: string]: Serializable | undefined }
export type Serializable = SerializablePrimitive | SerializableObject | SerializableArray
