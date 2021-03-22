export const isSymbol = <T>(value: T): value is Extract<T, symbol> => typeof value === 'symbol'
