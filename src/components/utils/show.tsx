import type { ReactNode } from 'react'

/**
 * Componente Show
 *
 * Conditional rendering with type-safety.
 *
 * @template T
 * @param {T} when - Conditional. If falsy, renders fallback.
 * @param {ReactNode} [fallback] - Alternative content, if "when" conditional is falsy.
 * @param {(item: NonNullable<T>) => ReactNode} children - Fuction that receives the value of "when" (not nullable) and returns JSX.
 *
 * @example
 * <Show when={user} fallback={<span>Loading...</span>}>
 *   {(user) => (
 *     <div>{user.name}</div>
 *   )}
 * </Show>
 *
 * @description
 * When the value of the "when" prop is truthy, the children function will be called with the typed value of "when" as its argument.
 * If the value of "when" is falsy, the fallback will be rendered.
 */

interface ShowProps<T> {
  when: T
  fallback?: ReactNode
  children: (item: NonNullable<T>) => ReactNode
}

const Show = <T,>({
  when: condition,
  fallback = null,
  children,
}: ShowProps<T>) => {
  if (!condition) return <>{fallback}</>

  return typeof children === 'function'
    ? children(condition as NonNullable<T>)
    : children
}

Show.displayName = 'Show'

export { Show }
