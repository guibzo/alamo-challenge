import { useCallback, useRef } from 'react'

/**
 * Custom hook for debouncing functions
 * @param callback - Callback function to be executed
 * @param delay - Delay in milliseconds
 * @returns Debounced function using useCallback
 */
export function debounce<T extends (...args: any[]) => any>(
  callback: T,
  delay: number,
): (...args: Parameters<T>) => void {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  return useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        callback(...args)
      }, delay)
    },
    [callback, delay],
  )
}
