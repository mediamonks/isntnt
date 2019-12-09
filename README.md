Isntnt is a collection of composable JavaScript runtime type predicates with TypeScript type guard declarations. Supports generics including union and intersection types.

# Generics

## above

```typescript
const isAboveZero = above(0) // (value: unknown) => value is number
```

## and

```typescript
const isBetween0And21 = and(above(0), below(21)) // (value: unknown) => value is number
```

## array

```typescript
const isAnyArray = array(isAny) // (value: unknown) => value is Array<any>
```

## at

```typescript
const isAnyAtFoo = at('foo', isAny) // (value: unknown) => value is { foo: any }
```

## below

```typescript
const isBelow21 = below(21) // (value: unknown) => value is { foo: any }
```

## either

```typescript
const isFooOrBar = either('foo', 'bar') // (value: unknown) => value is 'foo' | 'bar'
```

## has

```typescript
const hasFoo = has('foo') // (value: unknown) => value is { 'foo': unknown }
```

## instance

```typescript
const isInstanceofString = instance(String) // (value: unknown) => value is String
```

## literal

```typescript
const is42 = literal(42) // (value: unknown) => value is 42
```

## max

```typescript
const isMax255 = max(255) // (value: unknown) => value is number
```

## min

```typescript
const isMin18 = min(18) // (value: unknown) => value is number
```

## noneable

```typescript
const isNoneableString = noneable(isString) // (value: unknown) => value is string | null | undefined
```

## nullable

```typescript
const isNullableString = nullable(isString) // (value: unknown) => value is string | null
```

## object

```typescript
const isEnum = object(isNumber) // (value: unknown) => value is ObjectOf<number>
```

## optional

```typescript
const isOptionalString = optional(isString) // (value: unknown) => value is string | undefined
```

## or

```typescript
const isStringOrNumber = or(isString, isNumber) // (value: unknown) => value is string | number
```

## record

```typescript
const isEnum = record(isString, isNumber) // (value: unknown) => value is Record<string, number>
```

Note: `record` is limited to `string` and `symbol` type keys.

## shape

```typescript
const isPosition = shape({ x: isNumber, y: isNumber }) // (value: unknown) => value is { x: number, y: number }
```

## test

```typescript
const isSlug = test(/^[\w-]+$/) // (value: unknown) => value is string
```

## tuple

```typescript
const isEntry = tuple(isNumber, isNumber) // (value: unknown) => value is [number, number]
```

# Predicates

## isAny

```typescript
isAny(value) // value is any
```

## isArray

```typescript
isArray(value) // value is Array<unknown>
```

## isArrayLike

```typescript
isArrayLike(value) // value is Record<number, unknown>
```

## isBigInt

```typescript
isBigInt(value) // value is bigint
```

## isBoolean

```typescript
isBoolean(value) // value is boolean
```

## isDate

```typescript
isDate(value) // value is Date
```

## isDictionary

```typescript
isDictionary(value) // value is ObjectOf<string>
```

## isFalse

```typescript
isFalse(value) // value is false
```

## isFunction

```typescript
isFunction(value) // value is Function
```

## isInt

```typescript
isInt(value) // value is number
```

## isInt8

```typescript
isInt8(value) // value is number
```

## isInt16

```typescript
isInt16(value) // value is number
```

## isInt32

```typescript
isInt32(value) // value is number
```

## isLength

```typescript
isLength(value) // value is number
```

## isMap

```typescript
isMap(value) // value is Map<any, unknown>
```

## isNegative

```typescript
isNegative(value) // value is number
```

## isNever

```typescript
isNever(value) // value is never
```

## isNone

```typescript
isNone(value) // value is null | undefined
```

## isNull

```typescript
isNull(value) // value is null
```

## isNumber

```typescript
isNumber(value) // value is number
```

## isObject

```typescript
isObject(value) // value is object
```

## isObjectLike

```typescript
isObjectLike(value) // value is ObjectLike
```

## isPositive

```typescript
isPositive(value) // value is number
```

## isPrimitive

```typescript
isPrimitive(value) // value is Primitive
```

## isRegExp

```typescript
isRegExp(value) // value is RegExp
```

## isSerializable

```typescript
isSerializable(value) // value is Serializable
```

## isSerializableArray

```typescript
isSerializableArray(value) // value is Array<Serializable>
```

## isSerializableNumber

```typescript
isSerializableNumber(value) // value is number
```

## isSerializableObject

```typescript
isSerializableObject(value) // value is Record<string, Serializable>
```

## isSerializablePrimitive

```typescript
isSerializablePrimitive(value) // value is SerializablePrimitive
```

## isSet

```typescript
isSet(value) // value is Set<unknown>
```

## isSome

```typescript
isSome(value) // value is Some
```

## isString

```typescript
isString(value) // value is string
```

## isSymbol

```typescript
isSymbol(value) // value is symbol
```

## isTrue

```typescript
isTrue(value) // value is true
```

## isUint

```typescript
isUint(value) // value is number
```

## isUint8

```typescript
isUint8(value) // value is number
```

## isUint16

```typescript
isUint16(value) // value is number
```

## isUint32

```typescript
isUint32(value) // value is number
```

## isUndefined

```typescript
isUndefined(value) // value is undefined
```

## isWeakMap

```typescript
isWeakMap(value) // value is WeakMap<any, unknown>
```

## isWithLength

```typescript
isWithLength(value) // value is { length: number }
```

# Types

## Intersect

```typescript
Intersect<A | B> // A & B
```

## None

```typescript
None // null | undefined
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
SerializableObject // { [key: string]: Serializable }
```

## SerializablePrimitive

```typescript
SerializableObject // null | boolean | number | string
```

## Some

```typescript
Some // Function | boolean | bigint | number | string | symbol | object
```

## Static

```typescript
Static<Predicate<T>> // T
```
