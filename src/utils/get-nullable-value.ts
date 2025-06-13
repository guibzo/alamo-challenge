export const getNullableValue = <T>(val: T) => {
  if (typeof val === 'string' && val.length > 0) return val
  return null
}
