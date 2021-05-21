/**
 * Used to indicate unreachable conditional type branch
 */
export type Unreachable = never

/**
 * Extract value type from predicate type with support for any or unknown type values
 */
export type PredicateType<T, U> = (Exclude<any, U> extends never ? 1 : 0) extends 1
  ? Extract<T, U>
  : U extends T
  ? U
  : T extends U
  ? T
  : never

/**
 * Predicate type signature
 */
export type Predicate<T> = <U>(value: U) => value is PredicateType<T, U>

/**
 * Type that a predicate evaluates to
 */
export type Static<T extends Predicate<any>> = T extends Predicate<infer R> ? R : never

/**
 * Generic constructor interface
 */
export interface Constructor<T extends object = any, U extends ReadonlyArray<any> = []> {
  new (...rest: U): T
}

/**
 * Convert a union to an intersection
 * @link https://github.com/Microsoft/TypeScript/issues/29594#issuecomment-507673155
 */
export type Intersect<T> = (T extends any ? (k: T) => void : never) extends (k: infer I) => void
  ? I
  : never

/**
 * Legacy unknown, sum of all known type primitives
 */
export type Unknown = Some | None

/**
 * Null or undefined
 */
export type None = null | undefined

/**
 * A type except null or undefined
 */
export type Some<T = Function | boolean | bigint | number | string | symbol | object> = Exclude<
  T,
  None
>

/**
 * Union a type with null or undefined
 */
export type Maybe<T> = T | None

/**
 * Union a type with undefined
 */
export type Optional<T> = T | undefined

/**
 * Union a type with null
 */
export type Nullable<T> = T | null

/**
 * A string to string record
 */
export type Dictionary<T extends string = string> = Record<string, T>

/**
 * A plain object type
 * @alias UnknownObject
 */
export type PlainObject = Record<string, unknown>

/**
 * An object type with unknown properties
 * @alias PlainObject
 */
export type UnknownObject = PlainObject

/**
 * Some type except boolean
 */
export type ObjectLike = Exclude<Some, boolean>

/**
 * Array (possibly readonly) with unknown elements
 */
export type UnknownArray = Array<unknown> | ReadonlyArray<unknown>

/**
 * Array-like object
 */
export type ArrayLike = { length: number }

/**
 * Primitive value type
 */
export type Primitive = SerializablePrimitive | undefined | symbol | bigint

/**
 * Array that is serializable into json or has been deserialized from json
 */
export type SerializableArray = Array<Serializable> | ReadonlyArray<Serializable>

/**
 * Primitive that is serializable into json or has been deserialized from json
 */
export type SerializablePrimitive = null | boolean | number | string

/**
 * Object that is serializable into json or has been deserialized from json
 */
export type SerializableObject = { [key: string]: Serializable | undefined }

/**
 * Value that is serializable into json or has been deserialized from json
 */
export type Serializable = SerializablePrimitive | SerializableObject | SerializableArray

/**
 * An empty Map
 */
export type EmptyMap = Map<any, never>

/**
 * An empty Set
 */
export type EmptySet = Set<never>

/**
 * An empty (readonly) Array
 */
export type EmptyArray = Array<never> | ReadonlyArray<never>

/**
 * An empty object
 */
export type EmptyObject = Record<any, never>

/**
 * An empty primitive
 */
export type EmptyPrimitive = EmptyString | None

/**
 * An empty string
 */
export type EmptyString = ''

/**
 * An empty value
 */
export type Empty = EmptyPrimitive | EmptyArray | EmptyObject | EmptyMap | EmptySet

/**
 * An object property type
 */
export type PropertyValue<T> = T[keyof T]

/**
 * A union of optional object property keys
 */
export type OptionalKey<T> = Extract<
  {
    [P in keyof T]: Extract<T[P], undefined> extends never ? never : P
  }[keyof T],
  keyof T
>

/**
 * A union of required object property keys
 */
export type RequiredKey<T> = {
  [P in keyof T]: Extract<T[P], undefined> extends never ? P : never
}[keyof T]

/**
 * Object with inferred optional properties based on undefined values
 */
export type InferredOptional<T> = {
  [P in RequiredKey<T>]: T[P]
} &
  {
    [P in OptionalKey<T>]?: T[P]
  }

/**
 * Safely intersect a top-level value
 */
export type ShallowMerge<T, U> = T extends UnknownArray
  ? U extends UnknownArray
    ? ShallowMergeArray<T, U>
    : T & U
  : T extends PlainObject
  ? U extends PlainObject
    ? ShallowMergeObject<T, U>
    : T & U
  : T & U

export type DeepMerge<T, U> = T extends UnknownArray
  ? U extends UnknownArray
    ? DeepMergeArray<T, U>
    : T & U
  : T extends PlainObject
  ? U extends PlainObject
    ? DeepMergeObject<T, U>
    : T & U
  : T & U

export type ShallowMergeObject<T extends PlainObject, U extends PlainObject> = PropertyValue<
  {
    [P in keyof T | keyof U]: (T & U)[P] extends never ? P : never
  }
> extends never
  ? T & U
  : never

export type DeepMergeObject<T extends PlainObject, U extends PlainObject> = ShallowMergeObject<
  {
    [P in keyof T | keyof U]: P extends keyof T
      ? P extends keyof U
        ? DeepMerge<T[P], U[P]>
        : T[P]
      : P extends keyof U
      ? U[P]
      : Unreachable
  },
  {}
>

type BaseShallowMergeArray<T, U> = T extends UnknownArray
  ? U extends UnknownArray
    ? ShallowMergeArray<T, U>
    : never
  : never

/**
 * Shallow merge (readonly) arrays and tuples, readonly has precedence
 */
export type ShallowMergeArray<T extends UnknownArray, U extends UnknownArray> =
  T extends readonly never[]
    ? U extends readonly never[]
      ? T extends []
        ? U
        : T
      : never
    : T extends readonly [infer A, ...infer B]
    ? U extends readonly [infer C, ...infer D]
      ? A & C extends never
        ? never
        : T extends []
        ? U extends []
          ? [A & C, ...BaseShallowMergeArray<B, D>]
          : readonly [A & C, ...BaseShallowMergeArray<B, D>]
        : readonly [A & C, ...BaseShallowMergeArray<B, D>]
      : U extends ReadonlyArray<infer A>
      ? T[number] extends A
        ? U extends []
          ? T
          : Readonly<T>
        : never
      : Unreachable
    : T extends ReadonlyArray<infer A>
    ? U[number] extends A
      ? T extends []
        ? U
        : Readonly<U>
      : never
    : Unreachable

type BaseDeepMergeArray<T, U> = T extends UnknownArray
  ? U extends UnknownArray
    ? DeepMergeArray<T, U>
    : never
  : never

/**
 * Deep merge (readonly) arrays and tuples, readonly has precedence
 */
export type DeepMergeArray<T extends UnknownArray, U extends UnknownArray> =
  T extends readonly never[]
    ? U extends readonly never[]
      ? T extends []
        ? U
        : T
      : never
    : T extends readonly [infer A, ...infer B]
    ? U extends readonly [infer C, ...infer D]
      ? DeepMerge<A, C> extends never
        ? never
        : T extends []
        ? U extends []
          ? [DeepMerge<A, C>, ...BaseDeepMergeArray<B, D>]
          : readonly [DeepMerge<A, C>, ...BaseDeepMergeArray<B, D>]
        : readonly [DeepMerge<A, C>, ...BaseDeepMergeArray<B, D>]
      : U extends ReadonlyArray<infer A>
      ? DeepMerge<T[number], A> extends never
        ? never
        : U extends []
        ? FillArray<T, DeepMerge<T[number], A>>
        : Readonly<FillArray<T, DeepMerge<T[number], A>>>
      : Unreachable
    : T extends ReadonlyArray<infer A>
    ? DeepMerge<U[number], A> extends never
      ? never
      : T extends []
      ? FillArray<U, DeepMerge<U[number], A>>
      : Readonly<FillArray<U, DeepMerge<U[number], A>>>
    : Unreachable

export type FillArray<T extends UnknownArray, U> = T extends [any]
  ? [U]
  : T extends readonly [any]
  ? readonly [U]
  : T extends [any, ...infer B]
  ? [U, ...FillArray<B, U>]
  : T extends readonly [any, ...infer B]
  ? readonly [U, ...FillArray<B, U>]
  : T extends Array<any>
  ? Array<U>
  : T extends ReadonlyArray<any>
  ? ReadonlyArray<U>
  : Unreachable
