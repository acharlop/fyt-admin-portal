/* eslint-disable @typescript-eslint/no-explicit-any */
export type Dict<T = any> = Record<string, T>

export const isString = (value: any): value is string =>
  typeof value === 'string'

export const isArray = <T>(value: any): value is Array<T> =>
  Array.isArray(value)

export const isObject = (value: any): value is Dict => {
  const type = typeof value
  return (
    value != null &&
    (type === 'object' || type === 'function') &&
    !isArray(value)
  )
}
