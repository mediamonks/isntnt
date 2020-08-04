Isntnt is a collection of composable JavaScript runtime type predicates with TypeScript type guard declarations. Supports generics including union and intersection types.

# Generics

## above
`(floor: number) => (value: unknown) => value is number`

```typescript
const isAboveZero = above(0)
```

## and
`<T extends Array<Predicate<any>>>(...predicates: T) => (value: unknown) => value is Predicate<Intersect<Static<T[number]>>>`

```typescript
const isBetween0And21 = and(above(0), below(21))

const isUser = shape({ name: isString })
const hasEmailAddress = at('email' isString)

const isUserWithEmail = and(isUser, hasEmailAddress) // (value: unknown) => { name: string } & { email: string }
```

## array
`<T>(predicate: Predicate<T>) => (value: unknown) => value is Array<T>`

```typescript
const isAnyArray = array(isAny) // (value: unknown) => value is Array<any>
```

## at
`<T extends PropertyKey, U>(key: T, predicate: Predicate<U>) => (value: unknown) => value is { [P in T]: U }`

```typescript
const isAnyAtFoo = at('foo', isAny) // (value: unknown) => value is { foo: any }
```

## below
`(max: number) => (value: unknown) => value is number`

```typescript
const isBelow21 = below(21)
```

## either
`<T extends Array<Primitive>>(...literalValues: T) => (value: unknown) => value is T[number]`

```typescript
const isFooOrBar = either('foo', 'bar') // (value: unknown) => value is 'foo' | 'bar'
```

## has
`<T extends PropertyKey>(key: T) => (value: unknown) => value is { [P in T]: unknown }`

```typescript
const hasFoo = has('foo') // (value: unknown) => value is { 'foo': unknown }
```

## instance
`<T extends Constructor<any, any>>(constructor: T) => (value: unknown) => value is InstanceType<T>`

```typescript
const isInstanceofString = instance(String) // (value: unknown) => value is String
```

## literal
`<T extends Primitive>(literalValue: T) => (value: unknown) => value is T`

```typescript
const is42 = literal(42) // (value: unknown) => value is 42
```

## max
`<T extends number>(max: number) => (value: unknown) => value is number`

```typescript
const isMax255 = max(255)
```

## maybe
`<T>(predicate: Predicate<T>) => (value: unknown) => value is T | null | undefined`

```typescript
const isMaybeString = maybe(isString) // (value: unknown) => value is string | null | undefined
```

## min
`(min: number) => (value: unknown) => value is number`

```typescript
const isMin18 = min(18)
```

## noneable

Aliases [`maybe`](#maybe)

## nullable
`<T>(predicate: Predicate<T>) => (value: unknown) => value is T | null`

```typescript
const isNullableString = nullable(isString) // (value: unknown) => value is string | null
```

## object
`<T>(predicate: Predicate<T>) => (value: unknown) => value is Record<any, T>`

```typescript
const isEnum = object(isUint) // (value: unknown) => value is Record<any, number>
```

## optional
`<T>(predicate: Predicate<T>) => (value: unknown) => value is T | undefined`

```typescript
const isOptionalString = optional(isString) // (value: unknown) => value is string | undefined
```

## or
`<T extends Array<Predicate<any>>>(...predicates: T) => (value: unknown) => value is Static<T[number]>`

```typescript
const isStringOrNumber = or(isString, isNumber) // (value: unknown) => value is string | number
```

## record
`<T extends PropertyKey, U>(keyPredicate: Predicate<T>, valuePredicate: Predicate<U>) => (value: unknown) => value is Record<T, U>`

```typescript
const isDictionary = record(isString, isInt) // (value: unknown) => value is Record<string, number>
```

## shape
`<T extends Record<PropertyKey, Predicate<any>>>(predicates: T) => (value: unknown) => value is { [P in keyof T]: Static<T[P]> }`

> Note: Actual signature also considers optional members (`{ name?: T }`) in its `Predicate` type

```typescript
const isCoordinate = shape({ x: isNumber, y: isNumber }) // (value: unknown) => value is { x: number, y: number }
```

## test
`(expression: RegExp) => (value: unknown) => value is string`

```typescript
const isSlug = test(/^[\w-]+$/)
```

## tuple
`<T extends Array<any>>(...predicates: { [K in keyof T]: Predicate<T[K]> }) => (value: unknown) => value is T`

```typescript
const isPoint = tuple(isNumber, isNumber) // (value: unknown) => value is [number, number]
```

# Predicates

## isAny
`(value: unknown) => value is any`

Always returns `true`.

```typescript
isAny(value)
```

## isArray
`(value: unknown) => value is Array<unknown>`

```typescript
isArray(value)
```

## isArrayLike
`(value: unknown) => value is Record<number, unknown>`

```typescript
isArrayLike(value)
```

## isBigInt
`(value: unknown) => value is bigint`

```typescript
isBigInt(value)
```

## isBoolean
`(value: unknown) => value is boolean`

```typescript
isBoolean(value)
```

## isDate
`(value: unknown) => value is Date`

```typescript
isDate(value)
```

## isDictionary
`(value: unknown) => value is Record<any, string>`

```typescript
isDictionary(value)
```

## isFalse
`(value: unknown) => value is false`

```typescript
isFalse(value)
```

## isFunction
`(value: unknown) => value is Function`

```typescript
isFunction(value)
```

## isInt
`(value: unknown) => value is number`

```typescript
isInt(value)
```

## isInt8
`(value: unknown) => value is number`

```typescript
isInt8(value)
```

## isInt16
`(value: unknown) => value is number`

```typescript
isInt16(value)
```

## isInt32
`(value: unknown) => value is number`

```typescript
isInt32(value)
```

## isLength
`(value: unknown) => value is number`

```typescript
isLength(value)
```

## isMap
`(value: unknown) => value is Map<any, unknown>`

```typescript
isMap(value)
```

## isNegative
`(value: unknown) => value is number`

```typescript
isNegative(value)
```

## isNever
`(value: unknown) => value is never`

Always returns `false`;

```typescript
isNever(value)
```

## isNone
`(value: unknown) => value is null | undefined`

```typescript
isNone(value)
```

## isNull
`(value: unknown) => value is null`

```typescript
isNull(value)
```

## isNumber
`(value: unknown) => value is number`

```typescript
isNumber(value)
```

## isObject
`(value: unknown) => value is object`

```typescript
isObject(value)
```

## isObjectLike
`(value: unknown) => value is ObjectLike`

```typescript
isObjectLike(value)
```

## isPlainObject
`(value: unknown) => value is {}`

```typescript
isPlainObject(value)
```

## isPositive
`(value: unknown) => value is number`

```typescript
isPositive(value)
```

## isPrimitive
`(value: unknown) => value is Primitive`

```typescript
isPrimitive(value)
```


## isRegExp
`(value: unknown) => value is RegExp`

```typescript
isRegExp(value)
```

## isSerializable
`(value: unknown) => value is Serializable`

```typescript
isSerializable(value)
```

## isSerializableArray
`(value: unknown) => value is Array<Serializable>`

```typescript
isSerializableArray(value)
```

## isSerializableNumber
`(value: unknown) => value is number`

```typescript
isSerializableNumber(value)
```

## isSerializableObject
`(value: unknown) => value is Record<string, Serializable>`

```typescript
isSerializableObject(value)
```

## isSerializablePrimitive
`(value: unknown) => value is SerializablePrimitive`

```typescript
isSerializablePrimitive(value)
```

## isSet
`(value: unknown) => value is Set<unknown>`

```typescript
isSet(value)
```

## isSome
`(value: unknown) => value is Some`

```typescript
isSome(value)
```

## isString
`(value: unknown) => value is string`

```typescript
isString(value)
```

## isSymbol
`(value: unknown) => value is symbol`

```typescript
isSymbol(value)
```

## isTrue
`(value: unknown) => value is true`

```typescript
isTrue(value)
```

## isUint
`(value: unknown) => value is number`

```typescript
isUint(value)
```

## isUint8
`(value: unknown) => value is number`

```typescript
isUint8(value)
```

## isUint16
`(value: unknown) => value is number`

```typescript
isUint16(value)
```

## isUint32
`(value: unknown) => value is number`

```typescript
isUint32(value)
```

## isUndefined
`(value: unknown) => value is undefined`

```typescript
isUndefined(value)
```

## isWeakMap
`(value: unknown) => value is WeakMap<any, unknown>`

```typescript
isWeakMap(value)
```

## isWithLength
`(value: unknown) => value is { length: number }`

```typescript
isWithLength(value)
```

# Types

## Intersect

```typescript
Intersect<A | B> // A & B
```

## Maybe

```typescript
Maybe<T> // T | null | undefined
```

```typescript
type MaybeString = Maybe<string> // string | null | undefined
```

## None

```typescript
None // null | undefined
```

## Nullable

```typescript
Nullable<T> // T | null
```

```typescript
type NullableString = Nullable<string> // string | null
```

## Optional

```typescript
Optional<T> // T | undefined
```

```typescript
type OptionalString = Optional<string> // string | undefined
```

## Predicate

```typescript
Predicate<T> // (value: unknown, ...rest: Array<unknown>) => value is T
```

## Primitive

```typescript
Primitive // null | undefined | boolean | number | string | symbol | bigint
```

## Serializable

```typescript
Serializable // SerializableArray | SerializableObject | SerializablePrimitive
```

## SerializableArray

```typescript
SerializableArray // Array<Serializable>
```

## SerializableObject

```typescript
SerializableObject // Partial<{ [key: string]: Serializable }>
```

## SerializablePrimitive

```typescript
SerializablePrimitive // null | boolean | number | string
```

## Some

```typescript
Some // Function | boolean | bigint | number | string | symbol | object
Some<T> // Exclude<T, undefined | null>
```

```typescript
// Make sure `T` is not `null` or `undefined`
type Option<T extends Some, E extends Error> = T | E

// Remove `null` or `undefined` from a type
type MaybeString = Optional<string> // string | null | undefined
type SomeString = Some<MaybeString> // string
```

## Static

```typescript
Static<Predicate<T>> // T
```

```typescript
type True = Static<typeof isTrue> // true
```
