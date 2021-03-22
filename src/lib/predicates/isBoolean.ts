import { Predicate } from '../types'

export const isBoolean = ((value: any) => typeof value === 'boolean') as Predicate<boolean>
